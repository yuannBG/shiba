import React from 'react';
import CustomThemeTypo from '../../common/design/custom-typo';
import { makeStyles } from '@mui/styles';
import { Grid, Button, useTheme, useMediaQuery } from '@mui/material';
import { ShibaGreen } from '../../common/constants';

const useStyles = makeStyles((theme) => ({
  discordSteps: {
    '&.MuiButtonBase-root:hover': {
      bgcolor: 'transparent',
      borderWidth: '0.125rem',
      cursor: 'default',
    },
    '&.MuiButton-outlined': {
      borderRadius: '0.625rem',
      borderColor: 'white',
      borderWidth: '0.125rem',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '0.5rem !important',
      marginTop: '0.5rem !important',
    },
  },
  spanSteps: { color: ShibaGreen },
  gridItem: {
    width: '100%',
  },
  SocialCTAButton: {
    width: '100%',
  },
  SocialCTAButtonGreen: {
    '&.MuiButtonBase-root': {
      backgroundColor: '#48c964',
      borderWidth: '0.125rem',
      opacity: 0.9,
    },
    '&.MuiButtonBase-root:hover': {
      backgroundColor: '#48c964',
      borderWidth: '0.125rem',
    },
    '&.MuiButton-outlined': {
      borderRadius: '0.625rem',
      borderColor: '#48c964',
      borderWidth: '0.125rem',
    },
  },
  SocialCTAButtonBlue: {
    '&.MuiButtonBase-root': {
      backgroundColor: '#5869ea',
      borderWidth: '0.125rem',
      opacity: 0.8,
    },
    '&.MuiButtonBase-root:hover': {
      backgroundColor: '#5869ea',
      borderWidth: '0.125rem',
    },
    '&.MuiButton-outlined': {
      borderRadius: '0.625rem',
      borderColor: '#5869ea',
      borderWidth: '0.125rem',
    },
  },
  gridButton: {
    paddingRight: '1rem',
    height: '100%',
  },
  gridIconButton: {
    height: '3.5rem',
    [theme.breakpoints.down('md')]: {
      height: '2.5rem',
    },
  },
}));

export const DiscordSteps = ({ step, text }) => {
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      disableElevation
      disableRipple
      className={classes.discordSteps}
    >
      <CustomThemeTypo
        variant="h5"
        fontweight={{ desktop: 700, mobile: 700 }}
      >
        <span className={classes.spanSteps}>{step}</span>&nbsp;
        <span className={classes.spanText}>{text}</span>
      </CustomThemeTypo>
    </Button>
  );
};

export const SocialCTAButton = ({
  icon,
  firstText,
  secondText,
  bgcolor,
  link,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesBelowSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid item xs={12} className={classes.gridItem}>
      <Button
        variant="outlined"
        className={[
          classes.SocialCTAButton,
          bgcolor === 'green'
            ? classes.SocialCTAButtonGreen
            : classes.SocialCTAButtonBlue,
        ]}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          component={'a'}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          {matchesBelowSM ? (
            <>
              <Grid item xs={2} className={classes.gridButton}>
                <img alt={icon} src={icon} className={classes.gridIconButton} />
              </Grid>
              <Grid item xs={10}>
                <Grid container direction="column">
                  <Grid item>
                    <CustomThemeTypo variant="h4">{firstText}</CustomThemeTypo>
                  </Grid>
                  <Grid item>
                    <CustomThemeTypo variant="h5">{secondText}</CustomThemeTypo>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid item className={classes.gridButton}>
                <img alt={icon} src={icon} className={classes.gridIconButton} />
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <CustomThemeTypo variant="h4">{firstText}</CustomThemeTypo>
                  </Grid>
                  <Grid item>
                    <CustomThemeTypo variant="h5">{secondText}</CustomThemeTypo>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Button>
    </Grid>
  );
};

export const DiscordButton = ({ step, text }) => {

  return 'Discord Button';
};
