import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { ShibaWhite } from '../../../common/constants';
import CustomThemeTypo from '../../../common/design/custom-typo';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    height: '100% !important',
    minHeight: '36.375rem !important',
    minWidth: '100% !important',
    marginTop: '2.1875rem !important',

    background:
      'linear-gradient(#222, #222), linear-gradient(to right, orange, white, orange)',
    border: '4px solid transparent',
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'padding-box, border-box',
    borderRadius: '1rem',
    borderWidth: '10px',
    position: 'relative',

    '& ::before': {
      content: '""',
      position: 'absolute',
      top: '-5px',
      bottom: '-5px',
      left: '-5px',
      right: '-5px',
      border: '6px solid #222',
      borderRadius: '0.8rem',
    },

    '-webkit-box-shadow': '0px 0px 7px 19px rgba(255,165,28,0.59)',

    [theme.breakpoints.down('desktop')]: {
      minHeight: '21.25rem !important',
    },
  },
  gridText: {
    minHeight: '100%',
    [theme.breakpoints.down('md')]: {
      paddingTop: '1rem',
      paddingBottom: '1rem',
      paddingRight: '1.125rem',
      paddingLeft: '1.125rem',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '2rem',
      paddingRight: '3rem',
      paddingLeft: '2rem',
      paddingBottom: '0rem',
    },
    '@media (min-width:1100px)': {
      paddingTop: '1rem',
      paddingRight: '2rem',
      paddingLeft: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '2rem',
      paddingRight: '2rem',
      paddingLeft: '4.5rem',
    },
    '@media (min-width:1400px)': {
      paddingTop: '1rem',
      paddingRight: '2rem',
      paddingLeft: '2rem',
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: '2rem',
      paddingRight: '3.5625rem',
    },
    '@media (min-width:1660px)': {
      paddingLeft: '2.4rem',
    },
    [theme.breakpoints.up('desktop')]: {
      paddingTop: '2rem',
      paddingBottom: '2rem',
      paddingRight: '3.5625rem',
    },
  },
  image: {
    marginTop: 'auto',
    [theme.breakpoints.up('desktop')]: {
      width: '36.1875rem !important',
    },
    [theme.breakpoints.down('desktop')]: {
      marginLeft: '2.7rem',
      width: '80% !important',
    },
    [theme.breakpoints.down('xl')]: {
      marginLeft: '2.5rem',
    },
    '@media (max-width:1350px)': {
      marginLeft: '4.5rem',
      width: '80% !important',
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: '1rem',
      maxWidth: '20rem !important',
    },
    [theme.breakpoints.down('md')]: {
      margin: 'auto',
      width: '16.5rem !important',
    },
    '@media (max-width:350px)': {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      margin: 'auto',
      maxWidth: '100% !important',
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '1rem',
    },
  },
  subtitle: {
    paddingTop: '2.625rem',
    [theme.breakpoints.down('xl')]: {
      paddingTop: '1.8rem',
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: '1.4rem',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '1rem',
    },
  },
}));

export const CustomTabPanel = ({ typesShiba }) => {
  const theme = useTheme();
  const { title, description, image } = typesShiba;
  const matchesBelowSM = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent={{
        xs: 'center',
        sm: 'center',
        md: 'space-between',
        lg: 'space-between',
        xl: 'space-between',
      }}
      alignContent="center"
      className={classes.mainGrid}
    >
      <Grid item sm={12} md={5} lg={5} xl={5}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ minHeight: '100%' }}
        >
          <img alt={image} src={image} className={classes.image} />
        </Grid>
      </Grid>
      <Grid
        container
        item
        sm={12}
        md={7}
        lg={7}
        xl={7}
        direction="column"
        className={classes.gridText}
        justifyContent={{
          xs: 'flex-start',
          sm: 'flex-start',
          md: 'center',
          lg: 'center',
          xl: 'center',
        }}
      >
        <Grid item>
          <CustomThemeTypo
            variant="h3"
            option="type-shiba"
            color={theme.palette.secondary.main}
            className={classes.title}
          >
            {title.toUpperCase()}
          </CustomThemeTypo>
        </Grid>
        <Grid item className={classes.subtitle}>
          {description.map((n, index) => (
            <CustomThemeTypo
              variant="subtitle2"
              option="type-shiba"
              key={index}
              color={ShibaWhite}
              align={matchesBelowSM ? 'justify' : 'inherit'}
            >
              {n}
              <br />
              <br />
            </CustomThemeTypo>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
