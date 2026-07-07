export type SceneType = 'splash' | 'flights' | 'hotels' | 'cars' | 'trips';
export type ThemeType = 'light' | 'dark' | 'premium';

export interface AnimationProps {
  theme: ThemeType;
  onComplete: () => void;
}

export interface FlutterMessage {
  scene?: SceneType;
  theme?: ThemeType;
}
