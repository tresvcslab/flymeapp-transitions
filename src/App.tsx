import { useState, useEffect } from 'react';
import { SceneType, ThemeType } from './types';
import SplashScreen from './components/SplashScreen';
import { AviationTransitions } from './components/AviationTransitions';

export default function App() {
  // Read initial configuration from URL query parameters
  const getQueryParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const sceneParam = (searchParams.get('scene') as SceneType) || 'splash';
    const themeParam = (searchParams.get('theme') as ThemeType) || 'dark';
    const isTransparentParam = searchParams.get('transparent') !== 'false'; // Defaults to transparent for overlay usage
    const isEmbedParam = searchParams.get('embed') === 'true';
    return { sceneParam, themeParam, isTransparentParam, isEmbedParam };
  };

  const { sceneParam, themeParam, isTransparentParam, isEmbedParam } = getQueryParams();

  const [scene, setScene] = useState<SceneType>(sceneParam);
  const [theme, setTheme] = useState<ThemeType>(themeParam);
  const [isTransparent, setIsTransparent] = useState<boolean>(isTransparentParam);
  const [isEmbed, setIsEmbed] = useState<boolean>(isEmbedParam);
  const [hotelAnimState, setHotelAnimState] = useState<'waiting' | 'greeting' | 'running'>('waiting');

  // Trigger countdown timers for non-splash scenes to complete automatically
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let subTimer: NodeJS.Timeout;

    if (scene === 'flights') {
      timer = setTimeout(() => {
        handleAnimationComplete();
      }, 4000); // 4 seconds
    } else if (scene === 'hotels') {
      setHotelAnimState('waiting');
      // After 2 seconds, transition to greeting
      subTimer = setTimeout(() => {
        setHotelAnimState('greeting');
      }, 2000);
      // Finish after 4 seconds
      timer = setTimeout(() => {
        handleAnimationComplete();
      }, 4000);
    } else if (scene === 'cars') {
      timer = setTimeout(() => {
        handleAnimationComplete();
      }, 5000); // 5 seconds
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(subTimer);
    };
  }, [scene]);

  // Sync state if URL changes directly
  useEffect(() => {
    const handleUrlChange = () => {
      const { sceneParam, themeParam, isTransparentParam, isEmbedParam } = getQueryParams();
      setScene(sceneParam);
      setTheme(themeParam);
      setIsTransparent(isTransparentParam);
      setIsEmbed(isEmbedParam);
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Listen to incoming messages from Flutter webview host
  useEffect(() => {
    const handleIncomingMessage = (event: MessageEvent) => {
      try {
        let msgBuffer = event.data;
        // Support stringified JSON if passed as raw text
        if (typeof msgBuffer === 'string') {
          try {
            msgBuffer = JSON.parse(msgBuffer);
          } catch {
            return; // Ignore general system logs or unformatted text
          }
        }

        if (msgBuffer && typeof msgBuffer === 'object') {
          if (msgBuffer.scene) {
            const validScenes: SceneType[] = ['splash', 'flights', 'hotels', 'cars'];
            if (validScenes.includes(msgBuffer.scene)) {
              setScene(msgBuffer.scene);
            }
          }
          if (msgBuffer.theme) {
            const validThemes: ThemeType[] = ['light', 'dark'];
            if (validThemes.includes(msgBuffer.theme)) {
              setTheme(msgBuffer.theme);
            }
          }
          if (msgBuffer.transparent !== undefined) {
            setIsTransparent(Boolean(msgBuffer.transparent));
          }
          if (msgBuffer.embed !== undefined) {
            setIsEmbed(Boolean(msgBuffer.embed));
          }
        }
      } catch (err) {
        console.error('Failed to parse incoming postMessage data from host:', err);
      }
    };

    window.addEventListener('message', handleIncomingMessage);
    return () => window.removeEventListener('message', handleIncomingMessage);
  }, []);

  // Dispatch callback back to Flutter when animation transitions successfully complete
  const handleAnimationComplete = () => {
    console.log(`[WebView Animation] Dispatching complete event for scene: ${scene}`);
    if (window.parent) {
      window.parent.postMessage(
        {
          event: 'animation_complete',
          scene: scene,
        },
        '*'
      );
    }
  };

  // Determine container background based on transparent flag and active mode
  const getBackgroundClass = () => {
    if (isTransparent) return 'bg-transparent';
    return theme === 'dark' ? 'bg-slate-950' : 'bg-white';
  };

  // Render the appropriate scene
  const renderScene = () => {
    const isDark = theme === 'dark';
    switch (scene) {
      case 'splash':
        return <SplashScreen onAnimationComplete={handleAnimationComplete} />;
      case 'flights':
        return (
          <AviationTransitions 
            isAnimatingFlight={true}
            isAnimatingHotel={false}
            isAnimatingCar={false}
            hotelAnimState="waiting"
            isDarkMode={isDark}
          />
        );
      case 'hotels':
        return (
          <AviationTransitions 
            isAnimatingFlight={false}
            isAnimatingHotel={true}
            isAnimatingCar={false}
            hotelAnimState={hotelAnimState}
            isDarkMode={isDark}
          />
        );
      case 'cars':
        return (
          <AviationTransitions 
            isAnimatingFlight={false}
            isAnimatingHotel={false}
            isAnimatingCar={true}
            hotelAnimState="greeting"
            isDarkMode={isDark}
          />
        );
      default:
        return <SplashScreen onAnimationComplete={handleAnimationComplete} />;
    }
  };

  return (
    <main
      className={`relative w-screen h-screen flex items-center justify-center transition-colors duration-500 overflow-hidden select-none ${getBackgroundClass()}`}
    >
      {/* Visual Debug helper visible only when not embedded, for manual previewing & scene switching */}
      {!isEmbed && (
        <div className="absolute top-4 left-4 z-50 flex gap-2 opacity-10 hover:opacity-100 transition-opacity duration-300 pointer-events-auto bg-slate-900/60 p-2 rounded-lg backdrop-blur text-[10px] font-mono text-white select-none">
          <button
            onClick={() => setScene('splash')}
            className={`px-2 py-1 rounded ${scene === 'splash' ? 'bg-indigo-500' : 'bg-slate-800'}`}
          >
            Splash
          </button>
          <button
            onClick={() => setScene('flights')}
            className={`px-2 py-1 rounded ${scene === 'flights' ? 'bg-indigo-500' : 'bg-slate-800'}`}
          >
            Flights
          </button>
          <button
            onClick={() => setScene('hotels')}
            className={`px-2 py-1 rounded ${scene === 'hotels' ? 'bg-indigo-500' : 'bg-slate-800'}`}
          >
            Hotels
          </button>
          <button
            onClick={() => setScene('cars')}
            className={`px-2 py-1 rounded ${scene === 'cars' ? 'bg-indigo-500' : 'bg-slate-800'}`}
          >
            Cars
          </button>
          <div className="h-4 w-px bg-slate-700 my-auto mx-1" />
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-2 py-1 rounded bg-slate-800"
          >
            {theme.toUpperCase()}
          </button>
          <button
            onClick={() => setIsTransparent(!isTransparent)}
            className={`px-2 py-1 rounded ${isTransparent ? 'bg-teal-500' : 'bg-slate-800'}`}
          >
            {isTransparent ? 'TRANS' : 'SOLID'}
          </button>
        </div>
      )}

      {renderScene()}

      {/* Permanent visual preview controls at the bottom of the viewport */}
      {!isEmbed && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[250] flex gap-3 pointer-events-auto select-none">
          <button
            onClick={() => setScene('flights')}
            className={`px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 transform active:scale-95 ${
              scene === 'flights'
                ? 'bg-white text-violet-900 border-white/80 scale-105'
                : 'bg-black/50 text-white/90 border-white/10 hover:bg-black/70 hover:border-white/30'
            }`}
          >
            Flights
          </button>
          <button
            onClick={() => setScene('hotels')}
            className={`px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 transform active:scale-95 ${
              scene === 'hotels'
                ? 'bg-white text-emerald-900 border-white/80 scale-105'
                : 'bg-black/50 text-white/90 border-white/10 hover:bg-black/70 hover:border-white/30'
            }`}
          >
            Hotels
          </button>
          <button
            onClick={() => setScene('cars')}
            className={`px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 transform active:scale-95 ${
              scene === 'cars'
                ? 'bg-white text-amber-950 border-white/80 scale-105'
                : 'bg-black/50 text-white/90 border-white/10 hover:bg-black/70 hover:border-white/30'
            }`}
          >
            Cars
          </button>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-3.5 py-1.5 text-base rounded-full shadow-lg backdrop-blur-md border border-white/10 bg-black/50 hover:bg-black/70 hover:border-white/30 text-white transition-all duration-300 transform active:scale-95 flex items-center justify-center"
            title="Cambiar Tema"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
      )}
    </main>
  );
}
