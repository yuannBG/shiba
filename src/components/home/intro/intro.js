/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import StyledContainer from '../../../common/design/container-element';
import SunShiba2 from '../../../assets/images/img.png';
import {
  ScrollToELement,
  ScrollToELement2,
} from '../../../common/utils/scroll-to-element';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: '100%',
    paddingTop: '4.5rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '1.375rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '2.25rem',
    },
  },
  image: {
    width: '20.375rem',
    height: '17rem',
    '@media (max-width:1850px)': {
      width: '20rem',
      height: '17rem',
    },
    [theme.breakpoints.down('xl')]: {
      width: '13.75rem',
      height: '10.3125rem',
    },
    '@media (max-width:1300px)': {
      width: '10.85rem',
      height: '10rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '8.75rem',
      height: '7.3125rem',
    },
    '@media (max-width:975px)': {
      width: '7.8rem',
      height: '7rem',
    },
    '@media (max-width:950px)': {
      width: '7.5rem',
      height: '7rem',
    },
    '@media (max-width:930px)': {
      width: '7.1rem',
      height: '7rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '6.75rem',
      height: '5.625rem',
    },
  },
  title: {
    width: '100%',
    paddingBottom: '1.875rem',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0.625rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '0.5rem',
    },
  },
  teamText: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0.75rem',
      paddingBottom: '1.5rem',
    },
  },
  mainImage: {
    height: '100% !important',
    width: '100% !important',
  },
}));

const Intro = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const classes = useStyles();

  useEffect(() => {
    if (value === 'Home') {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul);
    }
  }, [value]);

  return (
    <StyledContainer>
      <Grid item className={classes.mainImage} ref={myRef}>
        <img alt={SunShiba2} src={SunShiba2} className={classes.mainImage} />
      </Grid>
    </StyledContainer>
  );
};

export default Intro;