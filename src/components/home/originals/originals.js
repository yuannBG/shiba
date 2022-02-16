/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useTheme, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { sentences } from '../../../common/i18';
import CustomThemeTypo from '../../../common/design/custom-typo';
import TitleComponent from '../../../common/design/title';
import GoldShiba from '../../../assets/images/gold-shiba.png';
import { ShibaGrey } from '../../../common/constants';
import StyledContainer from '../../../common/design/container-element';
import useMediaQuery from '@mui/material/useMediaQuery';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ArrowRight from '../../../assets/icons/arrow-right.png';
import ArrowLeft from '../../../assets/icons/arrow-left.png';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: '100%',
    paddingTop: '3.75rem',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '2.25rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1.125rem',
    },
  },

  gridContainer: {
    width: '17.9%',
    [theme.breakpoints.down('lg')]: {
      width: '16.4%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '16.875rem',
      height: '16.875rem',
    },
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    paddingBottom: '0.75rem',
  },
  subTitle: {
    minHeight: '5rem',

    paddingTop: '1.875rem',
  },
  arrow: {
    width: '1.5rem',
  },
}));

const Originals = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesBelowSM = useMediaQuery(theme.breakpoints.down('sm'));

  const originalContent = [
    {
      title: sentences.Originals.DesignTitle,
      image: <img alt={GoldShiba} src={GoldShiba} className={classes.image} />,
      position: sentences.Originals.DesignPosition,
    },
    {
      title: sentences.Originals.SpecialistTitle,
      image: <img alt={GoldShiba} src={GoldShiba} className={classes.image} />,
      position: sentences.Originals.SpecialistPosition,
    },
    {
      title: sentences.Originals.MarketingTitle,
      image: <img alt={GoldShiba} src={GoldShiba} className={classes.image} />,
      position: sentences.Originals.MarketingPosition,
    },
    {
      title: sentences.Originals.ProjectTitle,
      image: <img alt={GoldShiba} src={GoldShiba} className={classes.image} />,
      position: sentences.Originals.ProjectPosition,
    },
    {
      title: sentences.Originals.StoryTitle,
      image: <img alt={GoldShiba} src={GoldShiba} className={classes.image} />,
      position: sentences.Originals.StoryPosition,
    },
  ];

  return (
    <StyledContainer>
      <TitleComponent>{sentences.Originals.Title}</TitleComponent>

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
        {!matchesBelowSM &&
          originalContent.map((n) => (
            <Grid item key={n.title} className={classes.gridContainer}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item className={classes.title}>
                  <CustomThemeTypo variant="caption">{n.title}</CustomThemeTypo>
                </Grid>
                <Grid item>{n.image}</Grid>
                <Grid item className={classes.subTitle}>
                  <CustomThemeTypo
                    variant="caption"
                    color={ShibaGrey}
                    fontweight={400}
                  >
                    {n.position}
                  </CustomThemeTypo>
                </Grid>
              </Grid>
            </Grid>
          ))}
        {matchesBelowSM && (
          <Carousel
            plugins={[
              'centered',
              'infinite',
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: (
                    <img
                      src={ArrowLeft}
                      alt={ArrowLeft}
                      className={classes.arrow}
                    />
                  ),
                  arrowRight: (
                    <img
                      src={ArrowRight}
                      alt={ArrowRight}
                      className={classes.arrow}
                    />
                  ),
                  addArrowClickHandler: true,
                },
              },
            ]}
          >
            {originalContent.map((n) => (
              <Grid item key={n.title}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item className={classes.title}>
                    <CustomThemeTypo variant="caption">
                      {n.title}
                    </CustomThemeTypo>
                  </Grid>
                  <Grid item>{n.image}</Grid>
                  <Grid item className={classes.subTitle}>
                    <CustomThemeTypo
                      variant="caption"
                      color={ShibaGrey}
                      fontweight={400}
                    >
                      {n.position}
                    </CustomThemeTypo>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Carousel>
        )}
      </Grid>
    </StyledContainer>
  );
};

export default Originals;
