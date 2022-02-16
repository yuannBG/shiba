/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Grid, useTheme, Box, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  ScrollToELement,
  ScrollToELement2,
} from '../../../common/utils/scroll-to-element';
import useIsMobile from '../../../common/utils/get-size-screen';
import { sentences } from '../../../common/i18';
import CustomThemeTypo from '../../../common/design/custom-typo';
import TitleComponent from '../../../common/design/title';
import StyledContainer from '../../../common/design/container-element';
import MoonShiba from '../../../assets/images/benefits/shiba-moon.png';
import LogoMini from '../../../assets/images/benefits/benefits-icon-mini.png';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: '100%',
    paddingTop: '1.125rem',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '0.75rem',
    },
  },
  subTitle: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '90%',
    },
  },
  imageBelowMD: {
    marginBottom: '2.0625rem',
    paddingTop: '1.5rem',
    [theme.breakpoints.down('lg')]: {
      width: '65%',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '.5rem',
      width: '100%',
    },
  },
  imageDesktop: {
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '42%',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '7.625rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '10.625rem',
    },
  },
  gridImage: {
    position: 'relative',
    width: '100%',
  },
  titleBelowSM: {
    paddingBottom: '.5rem',
  },
  boxBelowSM: {
    paddingBottom: '1.5rem',
    '&:last-child': {
      paddingBottom: '0',
    },
  },
  titleIcon: {
    width: '1.25rem',
    height: '1.25rem',
    marginRight: '0.8125rem',
    verticalAlign: 'text-bottom',
  },
  titleBlock: {
    [theme.breakpoints.up('lg')]: {
      paddingBottom: '0.5rem',
    },
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '0.25rem',
    },
  },
  blocktext: {
    position: 'absolute',
    maxWidth: '34.625rem',
    [theme.breakpoints.down('lg')]: {
      MaxWidth: '18.5625rem',
    },
  },
  blocktext1: {
    left: '0% !important',
    [theme.breakpoints.up('lg')]: {
      top: '20%',
      maxWidth: '30%',
    },
    [theme.breakpoints.up('desktop')]: {
      top: '10%',
      maxWidth: '30%',
    },
    [theme.breakpoints.down('lg')]: {
      top: '7%',
      maxWidth: '35%',
    },
  },
  blocktext2: {
    left: '0% !important',
    [theme.breakpoints.up('lg')]: {
      top: '48%',
      maxWidth: '32%',
    },
    [theme.breakpoints.up('desktop')]: {
      top: '37%',
      maxWidth: '34%',
    },
    [theme.breakpoints.down('lg')]: {
      top: '37%',
      maxWidth: '32%',
    },
  },
  blocktext3: {
    left: '0% !important',
    [theme.breakpoints.up('lg')]: {
      top: '80%',
      maxWidth: '30%',
    },
    [theme.breakpoints.up('desktop')]: {
      top: '75%',
      maxWidth: '31%',
    },
    [theme.breakpoints.down('lg')]: {
      top: '80%',
      maxWidth: '30%',
    },
  },
  blocktext4: {
    right: '3% !important',
    [theme.breakpoints.up('lg')]: {
      maxWidth: '30%',
      top: '25%',
    },
    [theme.breakpoints.up('desktop')]: {
      top: '20%',
      maxWidth: '30%',
    },
    [theme.breakpoints.down('lg')]: {
      top: '17%',
      maxWidth: '30%',
    },
  },
  blocktext5: {
    right: '0% !important',
    [theme.breakpoints.up('lg')]: {
      top: '55%',
      maxWidth: '30%',
    },
    [theme.breakpoints.up('desktop')]: {
      top: '55%',
      maxWidth: '29%',
    },
    [theme.breakpoints.down('lg')]: {
      top: '55%',
      maxWidth: '30%',
    },
  },
  blocktext6: {
    right: '0% !important',
    [theme.breakpoints.up('lg')]: {
      top: '88%',
      maxWidth: '28%',
    },
    [theme.breakpoints.up('desktop')]: {
      top: '88%',
      maxWidth: '29%',
    },
    [theme.breakpoints.down('lg')]: {
      top: '88%',
      maxWidth: '28%',
    },
  },
  iconFixed1: {
    position: 'absolute',
    left: '45%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.up('sm')]: {
      top: '36%',
      width: '2.4%',
    },
    [theme.breakpoints.up('md')]: {
      top: '30%',
      width: '2.4%',
    },
    [theme.breakpoints.up('lg')]: {
      top: '36%',
      width: '2%',
    },
    [theme.breakpoints.up('xl')]: {
      top: '32%',
      width: '1.8%',
    },
    [theme.breakpoints.up('desktop')]: {
      top: '29%',
      width: '1.8%',
    },
  },
  iconFixed2: {
    position: 'absolute',
    left: '39%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.up('sm')]: {
      top: '68%',
      width: '2.4%',
    },
    [theme.breakpoints.up('md')]: {
      top: '68%',
      width: '2.4%',
    },
    [theme.breakpoints.up('lg')]: {
      top: '68%',
      width: '2%',
    },
    [theme.breakpoints.up('xl')]: {
      top: '68%',
      width: '1.8%',
    },
    [theme.breakpoints.up('desktop')]: {
      top: '68%',
      width: '1.8%',
    },
  },
  iconFixed3: {
    position: 'absolute',
    left: '45%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.up('sm')]: {
      top: '85%',
      width: '2.4%',
    },
    [theme.breakpoints.up('md')]: {
      top: '85%',
      width: '2.4%',
    },
    [theme.breakpoints.up('lg')]: {
      top: '85%',
      width: '2%',
    },
    [theme.breakpoints.up('xl')]: {
      top: '85%',
      width: '1.8%',
    },
    [theme.breakpoints.up('desktop')]: {
      top: '85%',
      width: '1.8%',
    },
  },
  iconFixed4: {
    position: 'absolute',
    left: '63%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.up('sm')]: {
      top: '38%',
      width: '2.4%',
    },
    [theme.breakpoints.up('md')]: {
      top: '34%',
      width: '2.4%',
    },
    [theme.breakpoints.up('lg')]: {
      top: '38%',
      width: '2%',
    },
    [theme.breakpoints.up('xl')]: {
      top: '34%',
      width: '1.8%',
    },
    [theme.breakpoints.up('desktop')]: {
      top: '34%',
      width: '1.8%',
    },
  },
  iconFixed5: {
    position: 'absolute',
    left: '63%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.up('sm')]: {
      top: '68%',
      width: '2.4%',
    },
    [theme.breakpoints.up('md')]: {
      top: '68%',
      width: '2.4%',
    },
    [theme.breakpoints.up('lg')]: {
      top: '68%',
      width: '2%',
    },
    [theme.breakpoints.up('xl')]: {
      top: '68%',
      width: '1.8%',
    },
    [theme.breakpoints.up('desktop')]: {
      top: '68%',
      width: '1.8%',
    },
  },
  iconFixed6: {
    position: 'absolute',
    left: '61%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.up('sm')]: {
      top: '83%',
      width: '2.4%',
    },
    [theme.breakpoints.up('md')]: {
      top: '83%',
      width: '2.4%',
    },
    [theme.breakpoints.up('lg')]: {
      top: '83%',
      width: '2%',
    },
    [theme.breakpoints.up('xl')]: {
      top: '83%',
      width: '1.8%',
    },
    [theme.breakpoints.up('desktop')]: {
      top: '83%',
      width: '1.8%',
    },
  },
}));

const Benefits = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const classes = useStyles();
  const offsetCalcul2 = useIsMobile('start');
  const theme = useTheme();
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));

  const BlockText = ({title, subtitle, option}) => {
    return (
      <Box
        className={[
          classes.blocktext,
          option === 1
            ? classes.blocktext1
            : option === 2
            ? classes.blocktext2
            : option === 3
            ? classes.blocktext3
            : option === 4
            ? classes.blocktext4
            : option === 5
            ? classes.blocktext5
            : classes.blocktext6,
        ]}
      >
        <Box className={classes.titleBlock}>
          <CustomThemeTypo variant="h4" option="benefits" fontweight={900}>
            {title.toUpperCase()}
          </CustomThemeTypo>
        </Box>
        <CustomThemeTypo variant="subtitle2" fontweight={400} option="benefits">
          {subtitle}
        </CustomThemeTypo>
      </Box>
    );
  }

  useEffect(() => {
    if (value === 1) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul + offsetCalcul2);
    }
  }, [value]);

  const benefitsContent = [
    {
      title: sentences.Benefits.Step1,
      content: sentences.Benefits.Content1,
    },
    {
      title: sentences.Benefits.Step2,
      content: sentences.Benefits.Content2,
    },
    {
      title: sentences.Benefits.Step3,
      content: sentences.Benefits.Content3,
    },
    {
      title: sentences.Benefits.Step4,
      content: sentences.Benefits.Content4,
    },
    {
      title: sentences.Benefits.Step5,
      content: sentences.Benefits.Content5,
    },
    {
      title: sentences.Benefits.Step6,
      content: sentences.Benefits.Content6,
    },
  ];

  return (
    <StyledContainer>
      <div ref={myRef}>
        <TitleComponent>{sentences.Benefits.Title}</TitleComponent>
      </div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent={{
          xs: 'flex-start',
          sm: 'flex-start',
          md: 'center',
          lg: 'center',
          xl: 'center',
        }}
        className={classes.mainGrid}
      >
        <Grid item className={classes.subTitle}>
          <CustomThemeTypo variant="h4" align="center">
            {sentences.Benefits.SubTitle}
          </CustomThemeTypo>
        </Grid>

        {matchesBelowMD ? (
          <>
            <Grid item sx={{textAlign: 'center'}}>
              <img alt={MoonShiba} src={MoonShiba} className={classes.imageBelowMD} />
            </Grid>
            {benefitsContent.map((n, index) => (
              <Grid item key={n.title} className={classes.boxBelowSM}>
                <Box className={classes.titleBelowSM}>
                  <CustomThemeTypo
                    variant="h4"
                    option="benefits"
                    fontweight={900}
                  >
                    <img
                      alt={LogoMini}
                      src={LogoMini}
                      className={classes.titleIcon}
                    />
                    {n.title.toUpperCase()}
                  </CustomThemeTypo>
                </Box>
                <Box>
                  <CustomThemeTypo
                    variant="subtitle2"
                    fontweight={400}
                    option="benefits"
                    align="justify"
                  >
                    {n.content}
                  </CustomThemeTypo>
                </Box>
              </Grid>
            ))}
          </>
        ) : (
          <div className={classes.gridImage}>

            <img alt={MoonShiba} src={MoonShiba} className={classes.imageDesktop} />
            <img alt={LogoMini} src={LogoMini} className={classes.iconFixed1} />
            <img alt={LogoMini} src={LogoMini} className={classes.iconFixed2} />
            <img alt={LogoMini} src={LogoMini} className={classes.iconFixed3} />
            <img alt={LogoMini} src={LogoMini} className={classes.iconFixed4} />
            <img alt={LogoMini} src={LogoMini} className={classes.iconFixed5} />
            <img alt={LogoMini} src={LogoMini} className={classes.iconFixed6} />

            <BlockText
              title={benefitsContent[0].title}
              subtitle={benefitsContent[0].content}
              option={1}
            />

            <BlockText
              title={benefitsContent[1].title}
              subtitle={benefitsContent[1].content}
              option={2}
            />

            <BlockText
              title={benefitsContent[2].title}
              subtitle={benefitsContent[2].content}
              option={3}
            />

              <BlockText
              title={benefitsContent[3].title}
              subtitle={benefitsContent[3].content}
              option={4}
            />

            <BlockText
              title={benefitsContent[4].title}
              subtitle={benefitsContent[4].content}
              option={5}
              />

            <BlockText
              title={benefitsContent[5].title}
              subtitle={benefitsContent[5].content}
              option={6}
            />
          </div>
        )}
      </Grid>
    </StyledContainer>
  );
};

export default Benefits;