"use client";

import { useEffect, useState } from "react";
import { useMemo } from "react";
import { createContext } from "react";
import { ColorMode, ThemeProps } from "./types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";

export const ThemeContext = createContext({});

export default function Theme({ children }: ThemeProps) {
  const [mode, setMode] = useState<ColorMode>("dark");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = useMemo(() => {
    let mainTheme = createTheme({
      palette: {
        mode,
        ...(mode === "dark"
          ? {
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
            }
          : {
              text: {
                primary: "#000",
              },
              primary: {
                main: "#C80438",
              },
              secondary: {
                main: "#36C704",
              },
              action: {
                active: "rgba(0,0,0,0.54)",
              },
              background: {
                default: "#d9d9d9",
                paper: "#fff",
              },
            }),
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

    mainTheme = createTheme(
      mainTheme,
      {
        components: {
          MuiStack: {
            defaultProps: {
              direction: "row",
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                // color: mainTheme.palette.text.primary,

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
    return mainTheme;
  }, [mode]);

  // const colorMode = useMemo(
  //   () => ({
  //     toggleColorMode: () => {
  //       const newMode = mode === 'light' ? 'dark' : 'light'
  //       setCookie('colorMode', newMode)
  //       setMode(newMode)
  //     },
  //   }),
  //   [mode],
  // )

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
