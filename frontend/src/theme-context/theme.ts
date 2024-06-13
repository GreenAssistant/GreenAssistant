import { Theme, createTheme } from '@mui/material/styles';

export const AppLightTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    background: {
      default: "#EAEEEA",
    },
  },
});

export const AppDarkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#cdcde6",
    },
    background: {
      default: '#101811',
    },
  },
});

export const AppContrastTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    error: {
      main: "#000000",
    },
    success: {
      main: "#000000",
    },
    background: {
      default: '#fff',
    },
  },
});
