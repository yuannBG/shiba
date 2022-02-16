import { createTheme } from '@mui/material';
import { ShibaWhite, ShibaBlack, ShibaBlue, ShibaOrange } from '../constants';

export default createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      headerTab: 1660,
      meetTheTeam: 1800,
      desktop: 1920,
      xxl: 2300,
    },
  },
  palette: {
    common: {
      white: ShibaWhite,
      black: ShibaBlack,
      blue: ShibaBlue,
    },
    primary: {
      main: ShibaWhite,
    },
    secondary: {
      main: ShibaOrange,
      opacity60: 'rgba(39, 42, 191, 0.6)',
    },
    ternary: {
      main: ShibaBlack,
      opacity3: 'rgba(255, 255, 255, 0.03)',
      opacity10: 'rgba(255, 255, 255, 0.1)',
      opacity60: 'rgba(255, 255, 255, 0.6)',
    },
  },
  typography: {
    fontFamily: 'FastHand, Arial',
    h1: {
      fontFamily: 'FastHand',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '4.875rem', //78
      lineHeight: '4.875rem', //78
    },
    h2: {
      fontFamily: 'Lato',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 900,
      fontSize: '3rem', //48
      lineHeight: '3rem', //48
    },
    h3: {
      fontFamily: 'Lato',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '2.625rem', //42
      lineHeight: '3.375rem', //54
    },
    h4: {
      fontFamily: 'Lato',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '2.25rem', //36
      lineHeight: '2.75rem', //44
    },
    h5: {
      fontFamily: 'Lato',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '1.875rem', //30
      lineHeight: '2.75rem', //44
    },
    h6: {
      fontFamily: 'Lato',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 800,
      fontSize: '1.875rem', //30
      lineHeight: '1.875rem', //30
    },
    subtitle1: {
      fontFamily: 'Lato',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 900,
      fontSize: '1.75rem', //28
      lineHeight: '2rem', //32
    },
    subtitle2: {
      fontFamily: 'Lato',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '1.5rem', //24
      lineHeight: '2rem', //32
    },
    body1: {
      fontFamily: 'Lato',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '1.125rem', //18
      lineHeight: '1.75rem', //28
    },
    body2: {
      fontFamily: 'Lato',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '28px', //30
      lineHeight: '28px', //30
    },
    button: {
      fontFamily: 'Lato',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '1.75rem', //28
      lineHeight: '2rem', //32
    },
    caption: {
      fontFamily: 'Lato',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 900,
      fontSize: '1.875rem', //30
      lineHeight: '1.875rem', //30
    },
    overline: {
      fontFamily: 'Lato',
      color: ShibaWhite,
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '1.75rem', //28
      lineHeight: '3.75rem', //60
    },
  },
});
