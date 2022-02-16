import React from 'react';
import { Grid, Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LogoClashOfClan from '../../assets/logos/logo-clash-of-shiba.svg';
import CustomThemeTypo from '../../common/design/custom-typo';
import { sentences } from '../../common/i18';
import { ShibaGrey } from '../../common/constants';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.ternary.main,
    paddingBottom: '5rem',
    paddingTop: '6.3925rem',
    paddingLeft: '8.75rem',
    paddingRight: '8.75rem',
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '5rem',
      paddingTop: '6.3925rem',
      paddingRight: '2.5rem',
      paddingLeft: '2.5rem',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '100% !important',
      paddingTop: '5.8681rem',
      paddingBottom: '2rem',
      paddingRight: '1.25rem',
      paddingLeft: '1.25rem',
    },
  },
  logo: {
    [theme.breakpoints.up('lg')]: {
      height: '11.25rem',
      width: '37.5rem',
      marginBottom: 'auto',
    },
    [theme.breakpoints.down('lg')]: {
      height: '6rem',
      width: '20rem',
      marginBottom: '1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '3.75rem',
      width: '12.5rem',
      marginBottom: '1.5rem',
    },
  },
}));

const Footer = ({setValue}) => {
  const classes = useStyles();

  const handleClickMenu = () => {
    setValue('Home');
  };

  return (
    <footer className={classes.footer}>
      <Grid container item xs={12} justifyContent="center">
        <Button
          component={Link}
          disableRipple
          style={{
            backgroundColor: 'transparent',
            padding: 0,
          }}
          onClick={handleClickMenu}
        >
          <img
            alt={LogoClashOfClan}
            src={LogoClashOfClan}
            className={classes.logo}
          />
        </Button>
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <CustomThemeTypo variant="subtitle2" align="center" color={ShibaGrey}>
          {sentences.Footer.Part1}
        </CustomThemeTypo>
        <CustomThemeTypo variant="subtitle2" align="center" color={ShibaGrey}>
          {sentences.Footer.Part2}
        </CustomThemeTypo>
      </Grid>
    </footer>
  );
};

export default Footer;
