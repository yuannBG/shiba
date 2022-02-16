/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Grid,Box, useTheme, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { sentences } from '../../../common/i18';
import CustomThemeTypo from '../../../common/design/custom-typo';
import TitleComponent from '../../../common/design/title';
import StyledContainer from '../../../common/design/container-element';
import AmazingMaurice from './../../../assets/images/artist/amazing-maurice.png';
import ClashRoyal from './../../../assets/images/artist/clash-royal.png';
import Garfield from './../../../assets/images/artist/garfield.png';
import Marvel from './../../../assets/images/artist/marvel.png';
import TomJerry from './../../../assets/images/artist/tom-jerry.png';
import Elipse from './../../../assets/images/artist/elipse.png';
import ElipseMobile from './../../../assets/images/artist/elipse-mini.png';

const useStyles = makeStyles((theme) => ({
  contentSteps: {
    width: '100%',
    marginTop: '1.5rem !important',
    marginBottom: '3rem !important',
    padding: '2.0625rem',
    background:
      'linear-gradient(#222, #222), linear-gradient(to right, white, black, white)',
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

    [theme.breakpoints.down('lg')]: {
      padding: '1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1.125rem',
    },
  },
  gridContent: {
    paddingBottom: '5.625rem',
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '4.6875rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '0.625rem',
    },
  },
  boxSmall: {
    width: '10.83%',
    textAlign: 'center',
    minWidth: '15rem',
    [theme.breakpoints.down('xl')]: {
      minWidth: '12rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '16.3%',
      minWidth: '10rem',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '8rem',
    },
    '@media (max-width:800px)': {
      minWidth: '7rem',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '7.1875rem !important',
    },
  },
  imageSmall: {
    maxWidth: '40%',
    maxHeight: '40%',
    [theme.breakpoints.down('sm')]: {
      minWidth: '4.5rem',
    },
    '@media (max-width:400px)': {
      minWidth: '3.5rem',
    },
  },
  boxMedium: {
    width: '21%',
    textAlign: 'center',
    minWidth: '15rem',
    [theme.breakpoints.down('xl')]: {
      minWidth: '12rem',
    },
    [theme.breakpoints.down('lg')]: {
      minWidth: '10rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '22%',
      minWidth: '8rem',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '7.1875rem',
    },
  },
  imageMedium: {
    maxWidth: '40%',
    maxHeight: '40%',
    [theme.breakpoints.down('sm')]: {
      minWidth: '4.5rem',
    },
    '@media (max-width:400px)': {
      minWidth: '3.5rem',
    },
  },
  boxBig: {
    textAlign: 'center',
    width: '14.8%',
    [theme.breakpoints.down('xl')]: {
      // minWidth: '12rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '17.578%',
      maxWidth: '11.25rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '13.578%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '7.1875rem',
    },
  },
  imageBig: {
    maxWidth: '95%',
    maxHeight: '95%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '40%',
      maxHeight: '40%',
      minWidth: '4.5rem',
    },
    '@media (max-width:400px)': {
      minWidth: '3.5rem',
    },
  },
  elipse: {
    position: 'relative',
    width: '100%',
  },
  position1: {
    position: 'absolute',
    left: '2%',
    bottom: '10%',
    [theme.breakpoints.down('desktop')]: {
      left: '2%',
      bottom: '10%',
    },
    [theme.breakpoints.down('xl')]: {
      left: '2%',
      bottom: '5%',
    },
    [theme.breakpoints.down('lg')]: {
      left: '2%',
      bottom: '14.5%',
    },
    [theme.breakpoints.down('md')]: {
      left: '2%',
      bottom: '13%',
    },
    '@media (max-width:700px)': {
      left: '2%',
      bottom: '11%',
    },
    [theme.breakpoints.down('sm')]: {
      right: '2%',
      bottom: '10%',
    },
    '@media (max-width:400px)': {
      right: '0%',
      bottom: '15%',
    },
  },
  position2: {
    position: 'absolute',
    left: '15%',
    bottom: '58%',
    [theme.breakpoints.down('xl')]: {
      left: '15%',
      bottom: '60%',
    },
    [theme.breakpoints.down('lg')]: {
      left: '15%',
      bottom: '55%',
    },
    [theme.breakpoints.down('md')]: {
      left: '15%',
      bottom: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      left: '8%',
      bottom: '65%',
    },
    '@media (max-width:400px)': {
      left: '4%',
      bottom: '70%',
    },
  },
  position3: {
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    // transform: 'translate(-50%, -100%)',
    [theme.breakpoints.down('xl')]: {
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: '48%',
    },
    '@media (max-width:1350px)': {
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: '45%',
    },
    [theme.breakpoints.down('lg')]: {
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: '45%',
    },
    [theme.breakpoints.down('md')]: {
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'translateX(0%)',
      left: '57%',
      bottom: '80%',
    },
    '@media (max-width:400px)': {
      left: '57%',
      bottom: '80%',
    },
  },
  position4: {
    position: 'absolute',
    right: '15%',
    bottom: '58%',
    [theme.breakpoints.down('xl')]: {
      right: '15%',
      bottom: '60%',
    },
    [theme.breakpoints.down('lg')]: {
      right: '15%',
      bottom: '55%',
    },
    [theme.breakpoints.down('md')]: {
      right: '15%',
      bottom: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      right: '20%',
      bottom: '0%',
    },
    '@media (max-width:400px)': {
      right: '10%',
      bottom: '0%',
    },
  },
  position5: {
    position: 'absolute',
    right: '2%',
    bottom: '17.5%',
    [theme.breakpoints.down('desktop')]: {
      right: '2%',
      bottom: '17.5%',
    },
    [theme.breakpoints.down('xl')]: {
      right: '2%',
      bottom: '15%',
    },
    [theme.breakpoints.down('lg')]: {
      right: '2%',
      bottom: '20%',
    },
    [theme.breakpoints.down('md')]: {
      right: '2%',
      bottom: '20%',
    },
    '@media (max-width:700px)': {
      right: '2%',
      bottom: '20%',
    },
    [theme.breakpoints.down('sm')]: {
      right: '-4%',
      bottom: '40%',
    },
    '@media (max-width:400px)': {
      right: '-6%',
      bottom: '40%',
    },
  },
}));

const Artist = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesBelowSM = useMediaQuery(theme.breakpoints.down('sm'));
  
  const ImageMedaillon = ({ title, image, option, position }) => {
    return (
      <Box
        className={[
          option === 'small'
            ? classes.boxSmall
            : option === 'medium'
            ? classes.boxMedium
            : classes.boxBig,
          position === 1
            ? classes.position1
            : position === 2
            ? classes.position2
            : position === 3
            ? classes.position3
            : position === 4
            ? classes.position4
            : classes.position5,
        ]}
      >
        <img
          src={image}
          alt={image}
          className={
            option === 'small'
              ? classes.imageSmall
              : option === 'medium'
              ? classes.imageMedium
              : classes.imageBig
          }
        />
        <CustomThemeTypo variant="h1" option="medaillon" align="center">
          {title}
        </CustomThemeTypo>
      </Box>
    );
  };

  return (
    <StyledContainer>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className={classes.gridContent}
      >
        <TitleComponent>{sentences.Artist.Title}</TitleComponent>

        <div className={classes.contentSteps}>
          <CustomThemeTypo
            variant="h3"
            align={matchesBelowSM ? 'justify' : 'center'}
          >
            {sentences.Artist.Part1}
          </CustomThemeTypo>
          <CustomThemeTypo
            variant="h3"
            align={matchesBelowSM ? 'justify' : 'center'}
          >
            {sentences.Artist.Part2}
          </CustomThemeTypo>
          <br />
          <CustomThemeTypo
            variant="h3"
            align={matchesBelowSM ? 'justify' : 'center'}
          >
            {sentences.Artist.Part3}
          </CustomThemeTypo>
          <br />
          <CustomThemeTypo
            variant="h3"
            align={matchesBelowSM ? 'justify' : 'center'}
          >
            {sentences.Artist.Part4}
          </CustomThemeTypo>
        </div>
      </Grid>

      <Grid sx={{ position: 'relative' }}>
        <img
          src={matchesBelowSM ? ElipseMobile : Elipse}
          alt={matchesBelowSM ? ElipseMobile : Elipse}
          className={classes.elipse}
        />
        <ImageMedaillon
          title={sentences.Artist.medaillonMaurice}
          image={AmazingMaurice}
          option="small"
          position={1}
        />
        <ImageMedaillon
          title={sentences.Artist.medaillonGarfield}
          image={Garfield}
          option="medium"
          position={2}
        />
        <ImageMedaillon
          title={sentences.Artist.medaillonMarvel}
          image={Marvel}
          option="big"
          position={3}
        />
        <ImageMedaillon
          title={sentences.Artist.medaillonClashRoyal}
          image={ClashRoyal}
          option="medium"
          position={4}
        />
        <ImageMedaillon
          title={sentences.Artist.medaillonTomJerry}
          image={TomJerry}
          option="small"
          position={5}
        />
      </Grid>
    </StyledContainer>
  );
};

export default Artist;