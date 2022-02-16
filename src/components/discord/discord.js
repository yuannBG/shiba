import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { SocialCTAButton, DiscordSteps, DiscordButton } from './discord.design';
import CustomThemeTypo from '../../common/design/custom-typo';
import { sentences } from '../../common/i18';
import StyledContainer from './container-discord';
import backgroundImage from '../../assets/images/background-shiba-clan.png';
import backgroundImageMini from '../../assets/images/background-shiba-clan-min.png';
import { CTADiscord, CTAInstagram, CTATwitter, CTAWhatsapp, ShibaGreen } from '../../common/constants';
import Instagram from '../../assets/logos/instagram.svg';
import Twitter from '../../assets/logos/twitter.svg';
import DiscordIcon from '../../assets/logos/discord.svg';
import WhatsappIcon from '../../assets/logos/whatsapp.svg';
import LogoClashOfClan from '../../assets/logos/logo-clash-of-shiba.svg';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    height: '95vh',
    paddingTop: '50px',
    [theme.breakpoints.down('lg')]: {
      height: '90vh',
    },
    [theme.breakpoints.down('sm')]: {
      height: '95vh',
    },
  },
  discordSteps: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'top',
    height: '100vh',
    backgroundSize: 'cover',
    objectFit: 'scale-down',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${backgroundImageMini})`,
    },
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
    },
  },
  boxSocial: {
    maxWidth: '20rem',
    margin: 'auto',
  },
  image: {
    height: '2.875rem',
    width: '2.875rem',
    [theme.breakpoints.down('sm')]: {
      height: '2.3rem',
      width: '2.3rem',
    },
  },
  logo: {
    width: '15rem',
    [theme.breakpoints.down('sm')]: {
      width: '12rem',
    },
  },
}));

const Discord = () => {
  const classes = useStyles();

  return (
    <div className={classes.discordSteps}>
      <StyledContainer>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className={classes.mainGrid}
        >
          <Grid item xs={12}>
            <CustomThemeTypo variant="h1" option='discord' >
              {sentences.Discord.Title}
            </CustomThemeTypo>
          </Grid>

          <SocialCTAButton
            icon={DiscordIcon}
            firstText={sentences.Discord.ButtonDiscordTitle}
            secondText={sentences.Discord.ButtonDiscordSubtitle}
            bgcolor={'blue'}
            link={CTADiscord}
          />

          <Grid item xs={12}>
            <CustomThemeTypo variant="h2" color={ShibaGreen} option="discord">
              {sentences.Discord.Giveaway}
            </CustomThemeTypo>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              alignItems="space-between"
              justifyContent="space-between"
            >
              <Grid item xs={12} sm={5} md={5} lg={5}>
                <DiscordSteps
                  step={sentences.Discord.Step1}
                  text={sentences.Discord.ButtonStep1}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={7}>
                <DiscordSteps
                  step={sentences.Discord.Step2}
                  text={sentences.Discord.ButtonStep2}
                />
              </Grid>
            </Grid>
          </Grid>

          <SocialCTAButton
            icon={WhatsappIcon}
            firstText={sentences.Discord.ButtonWhatsappTitle}
            secondText={sentences.Discord.ButtonWhatsappSubtitle}
            bgcolor={'green'}
            link={CTAWhatsapp}
          />

          <Grid item xs={12}>
            <CustomThemeTypo variant="h5">
              {sentences.Discord.ExtraEntries}
            </CustomThemeTypo>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-around"
              className={classes.boxSocial}
            >
              <Grid
                item
                className={classes.gridIcon}
                component={'a'}
                href={CTAInstagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt={Instagram}
                  src={Instagram}
                  className={classes.image}
                />
              </Grid>
              <Grid
                item
                className={classes.gridIcon}
                component={'a'}
                href={CTATwitter}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt={Twitter} src={Twitter} className={classes.image} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <img
              alt={LogoClashOfClan}
              src={LogoClashOfClan}
              className={classes.logo}
            />
          </Grid>
        </Grid>
      </StyledContainer>

      <DiscordButton />
    </div>
  );
};

export default Discord;
