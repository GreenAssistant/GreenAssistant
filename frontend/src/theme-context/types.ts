export enum IThemeMode {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
  CONTRAST = "contrast",
}

export interface IThemeContext {
  themeMode: IThemeMode;
  switchThemeMode: (mode: IThemeMode) => void;
}