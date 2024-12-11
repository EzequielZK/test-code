import { Theme } from '@mui/material';
import { ReactNode } from 'react';

export type ThemeProps = {
  children: ReactNode;
};

export type ColorMode = 'light' | 'dark' | undefined;

export type ThemeContextType = {
  colorMode: { toggleColorMode: () => void };
  mode: ColorMode;
  theme: Theme;
};
