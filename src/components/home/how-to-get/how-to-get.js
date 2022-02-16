/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Button, Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { sentences } from '../../../common/i18';
import CustomThemeTypo from '../../../common/design/custom-typo';
import TitleComponent from '../../../common/design/title';
import Metamask from '../../../assets/images/how-to-get/metamask.png';
import Coinbase from '../../../assets/images/how-to-get/coinbase.png';
import Shiba from '../../../assets/images/how-to-get/shiba.png';
import StyledContainer from '../../../common/design/container-element';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    paddingTop: '7.8125rem',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '4.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '3.75rem',
    },
  },
  gridElement: {
    width: '30.04%',
    height: '27rem',
    position: 'relative',
    paddingLeft: '1.875rem',
    paddingRight: '1.875rem',

    [theme.breakpoints.down('desktop')]: {
      width: '30.04%',
      height: '25rem',
    },
    [theme.breakpoints.down('xl')]: {
      width: '30.04%',
      height: '19rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '32.04%',
      height: '17rem',
      paddingLeft: '1.125rem',
      paddingRight: '1.125rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '32.04%',
      height: '17rem',
      paddingLeft: '0.875rem',
      paddingRight: '0.875rem',
    },
    '@media (max-width:760px)': {
      height: '18rem',
    },
    '@media (max-width:690px)': {
      height: '20rem',
    },
    '@media (max-width:670px)': {
      height: '21rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '5.75rem !important',
      width: '20.25rem',
      height: '100%',
      '&:last-child': {
        marginBottom: '2rem !important',
      },
    },

    background:
      'linear-gradient(#222, #222), linear-gradient(to right, white, black, white)',
    border: '4px solid transparent',
    backgroundRepeat: 'no-repeat',
    backgroundOrigin: 'padding-box, border-box',
    borderRadius: '1rem',
    borderWidth: '10px',

    '& ::before': {
      content: '""',
      position: 'absolute',
      top: '-5px',
      bottom: '-5px',
      left: '-5px',
      right: '-5px',
      borderRadius: '0.8rem',
    },
  },
  boxImage: {
    position: 'absolute',
    width: '80px',
    top: '-70px',
    left: '45%',
    height: '80px',
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('xl')]: {
      position: 'absolute',
      width: '80px',
      top: '-55px',
      left: '50%',
      height: '80px',
      transform: 'translateX(-60%)',
    },
    [theme.breakpoints.down('lg')]: {
      position: 'absolute',
      width: '80px',
      top: '-50px',
      left: '50%',
      height: '80px',
      transform: 'translateX(-50%)',
    },
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      width: '80px',
      top: '-45px',
      left: '50%',
      height: '80px',
      transform: 'translateX(-45%)',
    },
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      width: '80px',
      top: '-45px',
      left: '50%',
      height: '80px',
      transform: 'translateX(-50%)',
    },
  },
  iconButton: {
    borderRadius: '10rem !important',
    cursor: 'default !important',
    border: '2px solid white !important',
    position: 'relative !important',
  },
  image: {
    width: '6.875rem',
    height: '6.875rem',
    [theme.breakpoints.down('xl')]: {
      width: '5rem',
      height: '5rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '4rem',
      height: '4rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '3.5rem',
      height: '3.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '4rem',
      height: '4rem',
    },
  },
  title: {
    paddingTop: '5.8125rem',
    paddingBottom: '5rem',
    [theme.breakpoints.down('xl')]: {
      paddingTop: '4.875rem',
      paddingBottom: '4.125rem',
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: '3.375rem',
      paddingBottom: '3.125rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '2.9375rem',
    },
  },
  buttonBottom: {
    position: 'absolute',
    width: '11.97%',
    bottom: '-50px',
    left: '37%',
    height: '80px',
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('desktop')]: {
      left: '48%',
      height: '70px',
      transform: 'translateX(-190%)',
    },
    [theme.breakpoints.down('xl')]: {
      width: '12.3%',
      left: '48%',
      transform: 'translateX(-200%)',
      height: '70px',
    },
    '@media (max-width:1360px)': {
      width: '12.9%',
    },
    '@media (max-width:1300px)': {
      width: '13.7%',
    },
    '@media (max-width:1230px)': {
      width: '14.2%',
    },
    [theme.breakpoints.down('lg')]: {
      width: '12.3%',
      left: '41%',
      height: '70px',
      transform: 'translateX(-190%)',
    },
    [theme.breakpoints.down('sm')]: {
      left: '46%',
      height: '70px',
      transform: 'translateX(-210%)',
    },
    '@media (max-width:370px)': {
      left: '46%',
      height: '70px',
      transform: 'translateX(-230%)',
    },
    [theme.breakpoints.up('desktop')]: {
      width: '6.25rem',
    },
  },
  iconButtonBottom: {
    [theme.breakpoints.up('desktop')]: {
      width: '14.375rem',
      height: '4.5rem',
    },
    [theme.breakpoints.down('desktop')]: {
      width: '440%',
      height: '4rem',
    },
    [theme.breakpoints.down('xl')]: {
      width: '430%',
      height: '3rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '524%',
      height: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '500%',
      height: '2.875rem',
    },
    '@media (max-width:370px)': {
      width: '550%',
      height: '2.875rem',
    },
    '@media (max-width:308px)': {
      height: '2.875rem !important',
    },

    background:
      'linear-gradient(#222, #222), linear-gradient(to right, black, white) !important',
    borderRadius: '1rem !important',
    border: '4px solid transparent !important',
    backgroundRepeat: 'no-repeat !important',
    backgroundOrigin: 'padding-box, border-box !important',
    borderWidth: '10px !important',
    position: 'relative !important',

    '& ::before': {
      content: '"" !important',
      position: 'absolute !important',
      top: '-5px !important',
      bottom: '-5px !important',
      left: '-5px !important',
      right: '-5px !important',
      border: '7px solid #222 !important',
      borderRadius: '0.8rem !important',
    },
  },
}));

const HowToGet = () => {
  const classes = useStyles();

  const ButtonIcon = ({ icon }) => {
    return (
      <IconButton disableRipple className={classes.iconButton}>
        <img alt={icon} src={icon} className={classes.image} />
      </IconButton>
    );
  };

  const ButtonIconBig = ({ text }) => {
    return (
      <Button
        variant="outlined"
        onClick={() => console.log('wesh')}
        className={classes.iconButtonBottom}
      >
        <CustomThemeTypo
          variant="subtitle2"
          align="center"
          option="how-to-get-button"
        >
          {text.toUpperCase()}
        </CustomThemeTypo>
      </Button>
    );
  };

  const originalContent = [
    {
      image: <ButtonIcon icon={Metamask} />,
      title: sentences.HowToGet.TitleMetamask,
      content: sentences.HowToGet.ContentMetamask,
      button: <ButtonIconBig text={sentences.HowToGet.ButtonMetamask} />,
    },
    {
      image: <ButtonIcon icon={Coinbase} />,
      title: sentences.HowToGet.TitleCoinbase,
      content: sentences.HowToGet.ContentCoinbase,
      button: <ButtonIconBig text={sentences.HowToGet.ButtonCoinbase} />,
    },
    {
      image: <ButtonIcon icon={Shiba} />,
      title: sentences.HowToGet.TitleShiba,
      content: sentences.HowToGet.ContentShiba,
      button: <ButtonIconBig text={sentences.HowToGet.ButtonShiba} />,
    },
  ];

  return (
    <StyledContainer>
      <TitleComponent>{sentences.HowToGet.Title}</TitleComponent>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent={{
          xs: 'center',
          sm: 'space-between',
          md: 'space-between',
          lg: 'space-between',
          xl: 'space-between',
        }}
        className={classes.mainGrid}
      >
        {originalContent.map((n, index) => (
          <Grid item key={index} className={classes.gridElement}>
            <Box className={classes.boxImage}>{n.image}</Box>
            <Box className={classes.title}>
              <CustomThemeTypo
                variant="h6"
                align="center"
                fontweight={900}
                option="how-to-get"
              >
                {n.title.toUpperCase()}
              </CustomThemeTypo>
              <br />
              <CustomThemeTypo
                variant="subtitle2"
                align="center"
                option="how-to-get"
              >
                {n.content.toUpperCase()}
              </CustomThemeTypo>
            </Box>
            <Box className={classes.buttonBottom}>{n.button}</Box>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default HowToGet;
