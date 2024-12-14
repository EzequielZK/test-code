"use client";

import { createContext } from "react";
import { ThemeProps } from "./types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";

export const ThemeContext = createContext({});

export default function Theme({ children }: ThemeProps) {
  let theme = createTheme({
    palette: {
      mode: "dark",
      text: {
        primary: "#fff",
      },
      primary: {
        main: "#91FF51",
        contrastText: "#000",
      },
      secondary: {
        main: "#c426c4",
        contrastText: "#000",
      },
      action: {
        disabledBackground: "rgba(255,255,255,0.12)",
        disabled: "rgba(255,255,255,0.3)",
      },
      background: {
        default: "#0a0a0a",
        paper: "#121212",
      },
    },

    typography: {
      fontFamily: [
        "'Raleway'",
        "'Inter Tight'",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
      h1: {
        fontSize: "4rem",
      },
      h2: {
        fontSize: "3rem",
      },
      h3: {
        fontSize: "2.5rem",
      },
      h4: {
        fontSize: "2rem",
      },
      h5: {
        fontSize: "1.5rem",
      },
      h6: {
        fontSize: "1rem",
      },
    },
    spacing: 8,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1360,
        xl: 1600,
      },
    },
  });

  theme = createTheme(
    theme,
    {
      components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              wordBreak: "break-word",
              lineHeight: 1.25,
            },
          },
        },
        MuiContainer: {
          defaultProps: {
            maxWidth: "lg",
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundImage: "none",
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
            },
          },
        },
      },
    },
    ptBR
  );

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
