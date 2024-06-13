import * as React from 'react';
import { createContext, useEffect, useState } from "react";
import { IThemeContext, IThemeMode } from "./types";
import { AppContrastTheme, AppDarkTheme, AppLightTheme } from "./theme";
import { Theme, ThemeProvider, useMediaQuery } from "@mui/material";

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeContextProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  const SYSTEM_THEME: Exclude<IThemeMode, IThemeMode.SYSTEM> = useMediaQuery("(prefers-color-scheme: dark)") ? IThemeMode.DARK : IThemeMode.LIGHT;

  const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.SYSTEM);
  const [theme, setTheme] = useState<Theme>(
    SYSTEM_THEME === IThemeMode.DARK ? AppDarkTheme : AppLightTheme
  );

  useEffect(() => {
    const root = document.documentElement;
    const rootRoot = document.getElementById('root') as HTMLElement;
    document.querySelector("body")?.removeAttribute('theme');

    let selectedTheme: Theme;
    let backgroundColor: string;

    switch(themeMode) {
      case IThemeMode.LIGHT: 
        selectedTheme = AppLightTheme;
        backgroundColor = '#EAEEEA';
        break;
      case IThemeMode.DARK: 
        selectedTheme = AppDarkTheme;
        backgroundColor = '#101811';
        break;
      case IThemeMode.SYSTEM:
        selectedTheme = SYSTEM_THEME === IThemeMode.DARK ? AppDarkTheme : AppLightTheme;
        backgroundColor = SYSTEM_THEME === IThemeMode.DARK ? '#101811' : '#EAEEEA';
        break;
      case IThemeMode.CONTRAST: 
      selectedTheme = AppContrastTheme;
      backgroundColor = '#fff';
      document.querySelector("body")?.setAttribute('theme', 'contrast');
      break;
      default: 
        selectedTheme = AppLightTheme;
        backgroundColor = '#EAEEEA';
        break;
    }

    setTheme(selectedTheme);
    root.style.backgroundColor = backgroundColor;
    rootRoot.style.backgroundColor = backgroundColor;
  }, [themeMode, SYSTEM_THEME]);

  useEffect(() => {
    const _getThemeModeFromPref = () : IThemeMode => {
      const themeModeFromPref = localStorage.getItem("themeMode") as IThemeMode;
      if (themeModeFromPref) {
        return themeModeFromPref;
      } else if (SYSTEM_THEME) return SYSTEM_THEME;
        else return IThemeMode.LIGHT;
    };

    const themeModeFromPref = _getThemeModeFromPref();
    setThemeMode(themeModeFromPref);
  }, [SYSTEM_THEME]);


  const _setThemeModeToPref = (mode: IThemeMode) => {
    localStorage.setItem("themeMode", mode);
  };

  const switchThemeMode = (mode: IThemeMode) => {
    setThemeMode(mode);
    _setThemeModeToPref(mode);
  };

  return (
          <ThemeContext.Provider
            value={{
              themeMode, 
              switchThemeMode,
            }} 
          >
            <ThemeProvider theme={theme}> {children} </ThemeProvider>
          </ThemeContext.Provider>
  );
};