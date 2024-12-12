"use client";

import { css, Global } from "@emotion/react";
import { useTheme } from "@mui/material";

export default function GlobalStyles() {
  const theme = useTheme();

  const globalStyles = css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body {
      max-width: 100vw;
      overflow: hidden;
      height: 100%;
      background-color: #0e0e0e;
    }

    main {
      scroll-behavior: smooth;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    @media (prefers-color-scheme: dark) {
      html {
        color-scheme: ${theme.palette.mode};
      }
    }
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.palette.background.default};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.palette.primary.main};
      border-radius: 16px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-box-shadow: none !important;
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #fff !important;
    }
    input::-ms-reveal,
    input::-ms-clear {
      display: none;
    }
  `;

  return <Global styles={globalStyles} />;
}
