import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import facebook from '../../assets/logos/facebook.png';
import facebookOver from '../../assets/logos/facebook-over.png';
import linkedin from '../../assets/logos/linkedin.png';
import linkedinOver from '../../assets/logos/linkedin-over.png';
import twitter from '../../assets/logos/twitter-circle.png';
import twitterOver from '../../assets/logos/twitter-circle-over.png';
import ButtonIcon from './button-icon';
import { CTADiscord, CTAInstagram, CTATwitter } from '../constants';

const useStyles = makeStyles((theme) => ({
  socialContainer: {
    right: '1.5em',
    minWidth: '10rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '0 !important',
    },
  },
}));

const MediaIcons = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      md={2}
      lg={2}
      alignItems="center"
      justifyContent="flex-end"
      spacing={4}
      className={classes.socialContainer}
    >
      <Grid
        item
        component={'a'}
        href={CTAInstagram}
        rel="noopener noreferrer"
        target="_blank"
        className={classes.gridIcon}
      >
        <ButtonIcon icon={facebook} iconHover={facebookOver} />
      </Grid>
      <Grid
        item
        component={'a'}
        href={CTADiscord}
        rel="noopener noreferrer"
        target="_blank"
      >
        <ButtonIcon icon={linkedin} iconHover={linkedinOver} />
      </Grid>
      <Grid
        item
        component={'a'}
        href={CTATwitter}
        rel="noopener noreferrer"
        target="_blank"
      >
        <ButtonIcon icon={twitter} iconHover={twitterOver} />
      </Grid>
    </Grid>
  );
};

export default MediaIcons;
