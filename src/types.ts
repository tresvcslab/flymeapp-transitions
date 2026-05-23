export type SceneType = 'splash' | 'flights' | 'hotels' | 'cars';
export type ThemeType = 'light' | 'dark';

export interface AnimationProps {
  theme: ThemeType;
  onComplete: () => void;
}

export interface FlutterMessage {
  scene?: SceneType;
  theme?: ThemeType;
}
