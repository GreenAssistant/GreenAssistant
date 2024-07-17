import * as React from 'react';
import { createContext, useEffect, useState } from "react";
import { IThemeContext, IThemeMode, TypoThemeMode } from "./types";
import { AppContrastTheme, AppDarkTheme, AppLightTheme, DarkBigTheme, ContrastBigTheme, LightBigTheme, DarkSmallTheme, ContrastSmallTheme, LightSmallTheme } from "./theme";
import { Theme, ThemeProvider, useMediaQuery } from "@mui/material";

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeContextProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  const SYSTEM_THEME: Exclude<IThemeMode, IThemeMode.SYSTEM> = useMediaQuery("(prefers-color-scheme: dark)") ? IThemeMode.DARK : IThemeMode.LIGHT;

  const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.SYSTEM);
  const [theme, setTheme] = useState<Theme>(
    SYSTEM_THEME === IThemeMode.DARK ? AppDarkTheme : AppLightTheme
  );

  const [typoThemeMode, setTypoThemeMode] = useState<TypoThemeMode>();

  useEffect(() => {
    const root = document.documentElement;
    const rootRoot = document.getElementById('root') as HTMLElement;
    document.querySelector("body")?.removeAttribute('theme');

    let selectedTheme: Theme;
    let backgroundColor: string;

    switch(themeMode) {
      case IThemeMode.LIGHT:
        selectedTheme = isZoomIn() ? LightBigTheme : AppLightTheme;
        backgroundColor = '#EAEEEA';
        break;
      case IThemeMode.DARK:
        selectedTheme = isZoomIn() ? DarkBigTheme : AppDarkTheme;
        backgroundColor = '#101811';
        break;
      case IThemeMode.SYSTEM:
        selectedTheme = SYSTEM_THEME === IThemeMode.DARK ? AppDarkTheme : AppLightTheme;
        backgroundColor = SYSTEM_THEME === IThemeMode.DARK ? '#101811' : '#EAEEEA';
        break;
      case IThemeMode.CONTRAST:
      selectedTheme = isZoomIn() ? ContrastBigTheme : AppContrastTheme;
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
    let selectedTheme: Theme;

    switch (typoThemeMode) {
      case TypoThemeMode.SMALL:
           if (themeMode === IThemeMode.DARK) {
            selectedTheme = DarkSmallTheme;
            break;
          } else if (themeMode === IThemeMode.CONTRAST) {
            selectedTheme = ContrastSmallTheme;
            break;
          } else {
            selectedTheme = LightSmallTheme;
            break;
          }
      case TypoThemeMode.BIG:
        if (themeMode === IThemeMode.DARK) {
          selectedTheme = DarkBigTheme;
          break;
        } else if (themeMode === IThemeMode.CONTRAST) {
          selectedTheme = ContrastBigTheme;
          break;
        } else {
          selectedTheme = LightBigTheme;
          break;
        }
      default:
        selectedTheme = AppLightTheme;
        break;
    }
    setTheme(selectedTheme);
  }, [typoThemeMode]);

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

  const handleZoomIn = (reset: boolean) => {
    if(reset) {
      setTypoThemeMode(TypoThemeMode.SMALL);
    }
     else {
      setTypoThemeMode(TypoThemeMode.BIG);
    }

  };

  const isZoomIn = () => {
    return theme === DarkBigTheme || theme === LightBigTheme || theme === ContrastBigTheme;
  }

  return (
          <ThemeContext.Provider
            value={{
              themeMode,
              switchThemeMode,
              handleZoomIn,
              isZoomIn,
            }} 
          >
            <ThemeProvider theme={theme}> {children} </ThemeProvider>
          </ThemeContext.Provider>
  );
};