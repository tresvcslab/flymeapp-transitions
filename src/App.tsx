import { useState, useEffect } from 'react';
import { SceneType, ThemeType } from './types';
import SplashScreen from './components/SplashScreen';
import { AviationTransitions } from './components/AviationTransitions';
import { PremiumTransitions } from './components/PremiumTransitions';
import TripsScreen from './components/TripsScreen';

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
  const [isPremium, setIsPremium] = useState<boolean>(false);

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
    } else if (scene === 'trips') {
      timer = setTimeout(() => {
        handleAnimationComplete();
      }, 4000); // 4 seconds
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
            const validScenes: SceneType[] = ['splash', 'flights', 'hotels', 'cars', 'trips'];
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
    const message = JSON.stringify({ event: 'animation_complete', scene: scene });
    
    // Canal principal de Flutter WebView
    if ((window as any).FlutterBridge) {
      (window as any).FlutterBridge.postMessage(message);
    }
    
    // Fallback por si acaso
    if (window.parent) {
      window.parent.postMessage({ event: 'animation_complete', scene: scene }, '*');
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
    
    if (isPremium) {
      switch (scene) {
        case 'splash':
          return <SplashScreen onAnimationComplete={handleAnimationComplete} />;
        case 'flights':
          return (
            <PremiumTransitions 
              isAnimatingFlight={true}
              isAnimatingHotel={false}
              isAnimatingCar={false}
              isAnimatingTrips={false}
              hotelAnimState="waiting"
              isDarkMode={isDark}
            />
          );
        case 'hotels':
          return (
            <PremiumTransitions 
              isAnimatingFlight={false}
              isAnimatingHotel={true}
              isAnimatingCar={false}
              isAnimatingTrips={false}
              hotelAnimState={hotelAnimState}
              isDarkMode={isDark}
            />
          );
        case 'cars':
          return (
            <PremiumTransitions 
              isAnimatingFlight={false}
              isAnimatingHotel={false}
              isAnimatingCar={true}
              isAnimatingTrips={false}
              hotelAnimState="greeting"
              isDarkMode={isDark}
            />
          );
        case 'trips':
          return (
            <PremiumTransitions 
              isAnimatingFlight={false}
              isAnimatingHotel={false}
              isAnimatingCar={false}
              isAnimatingTrips={true}
              hotelAnimState="waiting"
              isDarkMode={isDark}
            />
          );
        default:
          return <SplashScreen onAnimationComplete={handleAnimationComplete} />;
      }
    }

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
      case 'trips':
        return <TripsScreen theme={theme} />;
      default:
        return <SplashScreen onAnimationComplete={handleAnimationComplete} />;
    }
  };

  return (
    <main
      className={`relative w-screen h-screen flex items-center justify-center transition-colors duration-500 overflow-hidden select-none ${getBackgroundClass()}`}
    >
      {renderScene()}

      {/* Permanent visual preview controls at the top of the viewport */}
      {!isEmbed && (
        <div className="absolute top-2 sm:top-6 left-1/2 -translate-x-1/2 z-[250] flex gap-1.5 sm:gap-3 pointer-events-auto select-none w-max max-w-[95vw]">
          <button
            onClick={() => setScene('flights')}
            className={`px-2 py-1 sm:px-3.5 sm:py-1.5 text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 transform active:scale-95 ${
              scene === 'flights'
                ? 'bg-white text-violet-900 border-white/80 scale-105'
                : 'bg-black/50 text-white/90 border-white/10 hover:bg-black/70 hover:border-white/30'
            }`}
          >
            Flights
          </button>
          <button
            onClick={() => setScene('hotels')}
            className={`px-2 py-1 sm:px-3.5 sm:py-1.5 text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 transform active:scale-95 ${
              scene === 'hotels'
                ? 'bg-white text-emerald-900 border-white/80 scale-105'
                : 'bg-black/50 text-white/90 border-white/10 hover:bg-black/70 hover:border-white/30'
            }`}
          >
            Hotels
          </button>
          <button
            onClick={() => setScene('cars')}
            className={`px-2 py-1 sm:px-3.5 sm:py-1.5 text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 transform active:scale-95 ${
              scene === 'cars'
                ? 'bg-white text-amber-950 border-white/80 scale-105'
                : 'bg-black/50 text-white/90 border-white/10 hover:bg-black/70 hover:border-white/30'
            }`}
          >
            Cars
          </button>
          <button
            onClick={() => setScene('trips')}
            className={`px-2 py-1 sm:px-3.5 sm:py-1.5 text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 transform active:scale-95 ${
              scene === 'trips'
                ? 'bg-white text-sky-900 border-white/80 scale-105'
                : 'bg-black/50 text-white/90 border-white/10 hover:bg-black/70 hover:border-white/30'
            }`}
          >
            Trips
          </button>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="px-2 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-base rounded-full shadow-lg backdrop-blur-md border border-white/10 bg-black/50 hover:bg-black/70 hover:border-white/30 text-white transition-all duration-300 transform active:scale-95 flex items-center justify-center"
            title="Cambiar Tema"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button
            className={`px-2 py-1 sm:px-3.5 sm:py-1.5 text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-1 ${
              isPremium 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 border-amber-300 font-extrabold scale-105 shadow-[0_0_15px_rgba(245,158,11,0.5)] animate-pulse'
                : 'border-amber-500/30 bg-amber-500/20 text-amber-200 hover:bg-amber-500/40 hover:border-amber-500/60'
            }`}
            title="Premium Mode"
            onClick={() => setIsPremium(!isPremium)}
          >
            <span>✨</span>
            <span>Premium</span>
          </button>
        </div>
      )}
    </main>
  );
}
