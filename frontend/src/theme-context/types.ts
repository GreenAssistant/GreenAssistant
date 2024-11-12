export enum IThemeMode {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
  CONTRAST = "contrast",
}

export enum TypoThemeMode {
  BIG = "big",
  SMALL = "small",
}

export interface IThemeContext {
  themeMode: IThemeMode;
  switchThemeMode: (mode: IThemeMode) => void;
  handleZoomIn: (reset: boolean) => void;
  isZoomIn: () => boolean;
}