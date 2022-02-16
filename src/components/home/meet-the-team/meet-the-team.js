/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  ScrollToELement,
  ScrollToELement2,
} from '../../../common/utils/scroll-to-element';
import { Grid, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useIsMobile from '../../../common/utils/get-size-screen';
import { sentences } from '../../../common/i18';
import CustomThemeTypo from '../../../common/design/custom-typo';
import TitleComponent from '../../../common/design/title';
import DesigningTeam from '../../../assets/images/team/designing-team.svg';
import DevelopmentTeam from '../../../assets/images/team/development-team.png';
import MarketingTeam from '../../../assets/images/team/marketing-team.svg';
import ModerationTeam from '../../../assets/images/team/moderation-team.png';
import { ShibaGrey, ShibaOrange } from '../../../common/constants';
import StyledContainer from '../../../common/design/container-element';
import useMediaQuery from '@mui/material/useMediaQuery';

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
  teamText1: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '0',
    },
  },
}));

const MeetTheTeam = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const classes = useStyles();
  const offsetCalcul2 = useIsMobile('start');
  const theme = useTheme();
  const matchesBelowSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesUpXXL = useMediaQuery(theme.breakpoints.up('xxl'));
  const matchesBelowMeetTheTeam = useMediaQuery(
    theme.breakpoints.down('meetTheTeam')
  );

  const Element = ({
    image,
    title,
    content,
    content2 = [],
    content3 = [],
    size,
    color,
  }) => {
    return (
      <Grid
        container
        item
        xs={size}
        direction={{
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
        }}
        alignItems={{
          xs: 'center',
          sm: 'center',
          md: 'flex-start',
          lg: 'flex-start',
          xl: 'flex-start',
        }}
        justifyContent="flex-start"
      >
        <Grid item>
          <img alt={image} src={image} className={classes.image} />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            alignItems={{
              xs: 'center',
              sm: 'center',
              md: 'flex-start',
              lg: 'flex-start',
              xl: 'flex-start',
            }}
            justifyContent="space-between"
            className={[classes.teamText, content3.length !== 0 ? classes.teamText1 : null]}
          >
            <Grid item className={classes.title}>
              <CustomThemeTypo
                variant="subtitle1"
                color={color}
                align={matchesBelowMD ? 'center' : 'left'}
              >
                {title}
              </CustomThemeTypo>
            </Grid>
            {content2.length === 0 && (
              <Grid item>
                {content.map((element, index) => (
                  <CustomThemeTypo
                    variant="body1"
                    key={index}
                    color={color}
                    align={matchesBelowMD ? 'center' : 'left'}
                  >
                    {element}
                  </CustomThemeTypo>
                ))}
              </Grid>
            )}
            {content2.length !== 0 && !matchesBelowMeetTheTeam && (
              <Grid container direction="row">
                <Grid item>
                  {content.map((element, index) => (
                    <CustomThemeTypo
                      variant="body1"
                      key={index}
                      color={color}
                      align={matchesBelowMD ? 'center' : 'left'}
                    >
                      {element}
                    </CustomThemeTypo>
                  ))}
                </Grid>
                <Grid item>
                  {content2.map((element, index) => (
                    <CustomThemeTypo
                      align={matchesBelowMD ? 'left' : 'right'}
                      variant="body1"
                      key={index}
                      color={color}
                    >
                      {element}
                    </CustomThemeTypo>
                  ))}
                </Grid>
              </Grid>
            )}

            {content3.length !== 0 && matchesBelowMeetTheTeam && (
              <Grid item>
                {content3.map((element, index) => (
                  <CustomThemeTypo
                    variant="body1"
                    key={index}
                    color={color}
                    align={matchesBelowMD ? 'center' : 'left'}
                  >
                    {element}
                  </CustomThemeTypo>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  };


  useEffect(() => {
    if (value === 3) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul + offsetCalcul2);
    }
  }, [value]);

  return (
    <StyledContainer>
      <div ref={myRef}>
        <TitleComponent>
          {sentences.MeetTheTeam.Title}
        </TitleComponent>
      </div>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        className={classes.mainGrid}
      >
        <Grid item sx={{ width: '100%' }}>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Element
              image={MarketingTeam}
              title={sentences.MeetTheTeam.MarketingTeam}
              content={sentences.MeetTheTeam.MarketingTeamMembers}
              size={
                matchesBelowSM
                  ? 12
                  : matchesBelowMeetTheTeam
                  ? 6
                  : matchesUpXXL
                  ? 6
                  : 5
              }
              color={ShibaGrey}
            />

            <Element
              image={DevelopmentTeam}
              title={sentences.MeetTheTeam.DevTeam}
              content={sentences.MeetTheTeam.DevTeamMembers}
              size={
                matchesBelowSM
                  ? 12
                  : matchesBelowMeetTheTeam
                  ? 6
                  : matchesUpXXL
                  ? 6
                  : 7
              }
              color={ShibaOrange}
            />
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ width: '100%', marginTop: matchesBelowSM ? 0 : '3.75rem' }}
        >
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Element
              image={DesigningTeam}
              title={sentences.MeetTheTeam.DesignTeam}
              content={sentences.MeetTheTeam.DesignTeamMembers}
              color={ShibaGrey}
              size={
                matchesBelowSM
                  ? 12
                  : matchesBelowMeetTheTeam
                  ? 6
                  : matchesUpXXL
                  ? 6
                  : 5
              }
            />

            <Element
              image={ModerationTeam}
              title={sentences.MeetTheTeam.ModerateTeam}
              content={sentences.MeetTheTeam.ModerateTeamMembers1}
              content2={sentences.MeetTheTeam.ModerateTeamMembers2}
              content3={sentences.MeetTheTeam.ModerateTeamMembers1.concat(
                sentences.MeetTheTeam.ModerateTeamMembers2
              )}
              size={
                matchesBelowSM
                  ? 12
                  : matchesBelowMeetTheTeam
                  ? 6
                  : matchesUpXXL
                  ? 6
                  : 7
              }
              color={ShibaOrange}
            />
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default MeetTheTeam;