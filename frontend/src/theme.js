import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2D6FF6'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '3rem',
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
      fontSize: '5rem',
      fontWeight: '600',
      lineHeight: '122%'
    },
    h2: {
      fontSize: '2.4rem',
      fontWeight: '500',
      lineHeight: 'normal'
    },
    h3: {
      fontSize: '3rem',
      fontWeight: '600',
      lineHeight: '122%'
    },
    subtitle1: {
      fontSize: '1.8rem',
      fontWeight: '400',
      lineHeight: '122%'
    },
    subtitle2: {
      fontSize: '1.6rem',
      fontWeight: '400',
      lineHeight: '152%'
    }
  }
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
