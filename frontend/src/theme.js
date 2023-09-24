import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2D6FF6'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '1.875rem',
        backgroundColor: '#2D6FF6',
        padding: '10px 50px',
        '&:hover': {
          backgroundColor: '#0949CC'
        }
      }
    }
  },
  typography: {
    h1: {
      fontSize: '3.125rem',
      fontWeight: '600',
      lineHeight: '122%'
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: '500',
      lineHeight: 'normal'
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: '600',
      lineHeight: '122%',
      color: '#2D6FF6'
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: '400',
      lineHeight: '122%'
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '152%'
    }
  }
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
