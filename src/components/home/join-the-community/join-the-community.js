/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Grid, useTheme, useMediaQuery, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { sentences } from '../../../common/i18';
import CustomThemeTypo from '../../../common/design/custom-typo';
import TitleComponent from '../../../common/design/title';
import { ShibaBlueTwitter } from '../../../common/constants';
import ButtonIconBig from '../../../common/design/button-icon-big';
import StyledContainer from '../../../common/design/container-element';
import MoonShiba from '../../../assets/images/join-the-community/join-community-moon.png';
import SunShiba from '../../../assets/images/join-the-community/join-community-sun.png';
import DiscordIcon from '../../../assets/logos/discord.svg';
import TwitterBlueIcon from '../../../assets/logos/twitter-bleu.svg';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: '100%',
    paddingTop: '5.625rem',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0.75rem',
    },
  },
  gridImage: {
    height: 'inherit !important',
  },
  boxImages: {
    position: 'relative',
    minWidth: '100%',
  },
  image1: {
    position: 'absolute',
    width: '60%',
    transform: 'translateY(-60%)',

  },
  image2: {
    position: 'absolute',
    width: '60%',
    left: '35%',
    transform: 'translateY(-60%)',

  },
  title: {
    paddingBottom: '2.25rem',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '1.125rem',
    },
  },
  gridButtons: {
    paddingTop: '1.125rem',
  },
}));

const JoinCommunity = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesBelowSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledContainer>
      <TitleComponent>{sentences.JoinTheCommunityNow.Title}</TitleComponent>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className={classes.mainGrid}
      >
        <Grid
          container
          item
          sm={6}
          md={6}
          sx={{ display: matchesBelowSM ? 'none' : 'inherit' }}
          className={classes.gridImage}
        >
          <Box className={classes.boxImages}>
            <img alt={MoonShiba} src={MoonShiba} className={classes.image1} />
            <img alt={SunShiba} src={SunShiba} className={classes.image2} />
          </Box>
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={6}
          md={6}
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Grid
            item
            className={classes.title}
            style={{
              width: matchesBelowSM ? '120px' : '100%',
              margin: matchesBelowSM ? 'auto' : 'inherit',
            }}
          >
            <div
              style={{
                height: '8px',
                background:
                  'linear-gradient(180deg, #A66B3F 0%, #FFFFFF 51.56%, #A66B3F 100%)',
              }}
            />
          </Grid>

          <Grid item>
            <CustomThemeTypo
              variant="subtitle2"
              align={matchesBelowSM ? 'justify' : 'inherit'}
              option="join"
            >
              {sentences.JoinTheCommunityNow.SubtitlePart1}
            </CustomThemeTypo>
            <br />
            <CustomThemeTypo
              variant="subtitle2"
              align={matchesBelowSM ? 'justify' : 'inherit'}
              option="join"
            >
              {sentences.JoinTheCommunityNow.SubtitlePart2}
            </CustomThemeTypo>
            <br />
            <CustomThemeTypo
              variant="subtitle2"
              align={matchesBelowSM ? 'justify' : 'inherit'}
              option="join"
            >
              {sentences.JoinTheCommunityNow.SubtitlePart3}
            </CustomThemeTypo>
          </Grid>

          <Grid
            container
            item
            xs={12}
            direction="row"
            alignItems="space-between"
            justifyContent={{
              xs: 'space-between',
              sm: 'space-around',
              md: 'space-around',
              lg: 'space-around',
              xl: 'space-around',
            }}
            className={classes.gridButtons}
          >
            <ButtonIconBig
              icon={DiscordIcon}
              text={sentences.JoinTheCommunityNow.ButtonDiscord}
              option={2}
            />
            <ButtonIconBig
              icon={TwitterBlueIcon}
              text={sentences.JoinTheCommunityNow.ButtonTwitter}
              option={3}
              color={ShibaBlueTwitter}
            />
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default JoinCommunity;