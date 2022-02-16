/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useEffect, useState } from 'react';
import { Tabs, Tab, Grid, useMediaQuery, useTheme, ButtonBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomThemeTypo from '../../../common/design/custom-typo';
import { ShibaWhite, ShibaOrange } from '../../../common/constants';
import StyledContainer from '../../../common/design/container-element';
import { sentences } from '../../../common/i18';
import {
  ScrollToELement,
  ScrollToELement2,
} from '../../../common/utils/scroll-to-element';
import { CustomTabPanel } from './type-shiba.design';
import GoldShiba from '../../../assets/images/gold-shiba.png';
import Assassin from '../../../assets/images/type-shiba/assassin.png';
import Crusader from '../../../assets/images/type-shiba/crusader.png';
import King from '../../../assets/images/type-shiba/king.png';
import Marechal from '../../../assets/images/type-shiba/marechal.png';
import Master from '../../../assets/images/type-shiba/master.png';
import Rogue from '../../../assets/images/type-shiba/rogue.png';
import Scout from '../../../assets/images/type-shiba/scout.png';
import Tracker from '../../../assets/images/type-shiba/tracker.png';
import SunShiba2 from '../../../assets/images/img.png';
import ArrowRight from '../../../assets/icons/arrow-right.png';
import ArrowLeft from '../../../assets/icons/arrow-left.png';

const useStyles = makeStyles((theme) => ({
  intro: {
    width: '100%',
    marginTop: '1.5rem !important',
    marginBottom: '3rem !important',
    padding: '1.875rem',
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
  },
  gridTop: {
    paddingBottom: '3rem',
  },
  gridMainImage: {
    height: '100% !important',
    width: '100% !important',
    position: 'relative',
  },
  mainImage: {
    height: '100% !important',
    width: '100% !important',
    position: 'relative',
  },
  Subtitle: {
    height: '100% !important',
    width: '100% !important',
    position: 'absolute',
  },
  tabs: {
    '& .MuiTabs-indicator': {
      backgroundColor: theme.palette.secondary.main,
    },
    '& .MuiSvgIcon-root': {
      color: 'white',
      height: '50px',
      width: '50px',
    },
    '& .MuiTabs-fixed .MuiTabs-flexContainer': {
      height: '8.875rem',
      [theme.breakpoints.up('lg')]: {
        height: '9.375rem',
      },
      [theme.breakpoints.up('xl')]: {
        height: '15.625rem',
      },
    },
    '& .MuiTabs-flexContainer': {
      width: '100%',
      justifyContent: 'space-between',
    },
  },
  tab: {
    '& .MuiTab-iconWrapper': {
      height: '100px',
    },
    padding: '0',
    justifyContent: 'flex-end !important',
    minWidth: '0 !important',
  },
  tab1: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '7rem !important',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '7.61% !important',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '7.29% !important',
    },
  },
  tab2: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '7rem !important',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '7.22% !important',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '8.33% !important',
    },
  },
  tab3: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '8rem !important',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '9.57% !important',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '8.75% !important',
    },
  },
  tab4: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '8rem !important',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '9.96% !important',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '8.64% !important',
    },
  },
  tab5: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '8rem !important',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '14.16% !important',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '12.3% !important',
    },
  },
  image1: {
    height: '50% !important',
    [theme.breakpoints.down('md')]: {
      height: '40% !important',
      maxWidth: '100% !important',
    },
    '@media (max-width:760px)': {
      height: '30% !important',
    },
    '@media (max-width:680px)': {
      height: '25% !important',
    },
  },
  image2: {
    height: '65% !important',
    [theme.breakpoints.down('md')]: {
      height: '50% !important',
      maxWidth: '110% !important',
    },
    '@media (max-width:760px)': {
      height: '40% !important',
    },
    '@media (max-width:680px)': {
      height: '35% !important',
    },
  },
  image3: {
    height: '75% !important',
    [theme.breakpoints.down('md')]: {
      height: '60% !important',
      maxWidth: '120% !important',
    },
    '@media (max-width:760px)': {
      height: '50% !important',
    },
    '@media (max-width:680px)': {
      height: '45% !important',
    },
  },
  image4: {
    height: '90% !important',
    [theme.breakpoints.down('md')]: {
      height: '75% !important',
      maxWidth: '130% !important',
    },
    '@media (max-width:760px)': {
      height: '65% !important',
    },
    '@media (max-width:680px)': {
      height: '55% !important',
    },
  },
  image5: {
    height: '90% !important',
    [theme.breakpoints.down('md')]: {
      height: '75% !important',
      maxWidth: '170% !important',
    },
    '@media (max-width:760px)': {
      height: '65% !important',
    },
    '@media (max-width:680px)': {
      height: '55% !important',
    },
  },
  arrowButton: {
    width: '1.5rem',
  },
}));

const TypeShiba = ({ valueHeader }) => {
  const classes = useStyles();
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const matchesBelowSM = useMediaQuery(theme.breakpoints.down('sm'));

  const typesShibas = [
    {
      title: sentences.TypeShiba.Type1,
      icon: <img alt={Rogue} src={Rogue} className={classes.image1} />,
      description: sentences.TypeShiba.Type1Description,
      image: GoldShiba,
      tabClass: classes.tab1
    },
    {
      title: sentences.TypeShiba.Type2,
      icon: <img alt={Tracker} src={Tracker} className={classes.image2} />,
      description: sentences.TypeShiba.Type2Description,
      image: GoldShiba,
      tabClass: classes.tab2
    },
    {
      title: sentences.TypeShiba.Type3,
      icon: <img alt={Assassin} src={Assassin} className={classes.image3} />,
      description: sentences.TypeShiba.Type3Description,
      image: GoldShiba,
      tabClass: classes.tab3
    },
    {
      title: sentences.TypeShiba.Type4,
      icon: <img alt={Master} src={Master} className={classes.image4} />,
      description: sentences.TypeShiba.Type4Description,
      image: GoldShiba,
      tabClass: classes.tab4
    },
    {
      title: sentences.TypeShiba.Type5,
      icon: <img alt={King} src={King} className={classes.image5} />,
      description: sentences.TypeShiba.Type5Description,
      image: GoldShiba,
      tabClass: classes.tab5
    },
    {
      title: sentences.TypeShiba.Type6,
      icon: <img alt={Marechal} src={Marechal} className={classes.image3} />,
      description: sentences.TypeShiba.Type6Description,
      image: GoldShiba,
      tabClass: classes.tab3
    },
    {
      title: sentences.TypeShiba.Type7,
      icon: <img alt={Crusader} src={Crusader} className={classes.image2} />,
      description: sentences.TypeShiba.Type7Description,
      image: GoldShiba,
      tabClass: classes.tab2
    },
    {
      title: sentences.TypeShiba.Type8,
      icon: <img alt={Scout} src={Scout} className={classes.image1} />,
      description: sentences.TypeShiba.Type8Description,
      image: GoldShiba,
      tabClass: classes.tab1
    },
  ];
  
  useEffect(() => {
    if (valueHeader === 0) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul);
    }
  }, [valueHeader]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const MyTabScrollButton = forwardRef((props, ref) => {
    const { direction, ...other } = props;

    return (
      <ButtonBase
        component="div"
        ref={ref}
        style={{ opacity: other.disabled ? 0 : 1 }}
        {...other}
      >
        {direction === 'left' ? (
          <img src={ArrowLeft} alt={ArrowLeft} className={classes.arrowButton} />
        ) : (
          <img src={ArrowRight} alt={ArrowRight} className={classes.arrowButton} />
        )}
      </ButtonBase>
    );
  });

  return (
    <div ref={myRef}>
      <StyledContainer>
        {/*  <Grid
          container
          direction="row"
          justifyContent="space-between"
          className={classes.gridTop}
        >
         <Grid item>
          <CustomThemeTypo align='center' variant='h1'>{sentences.TypeShiba.TitleMoon}</CustomThemeTypo>
          <img alt={MoonShiba} src={MoonShiba} />
        </Grid>
        <Grid item>
          <CustomThemeTypo align='center' variant='h1'>{sentences.TypeShiba.TitleSun}</CustomThemeTypo>
          <img alt={SunShiba} src={SunShiba} />
        </Grid>
          <Grid item className={classes.gridMainImage}>
            <img
              alt={SunShiba2}
              src={SunShiba2}
              className={classes.mainImage}
            />
          </Grid>
        <div className={classes.intro}>
          <CustomThemeTypo
            variant="h3"
            option="type-shiba-subtitle"
            align={matchesBelowSM ? 'justify' : 'center'}
          >
            {sentences.TypeShiba.Subtitle}
          </CustomThemeTypo>
        </div>
        </Grid> */}

        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons
          ScrollButtonComponent={MyTabScrollButton}
          variant={matchesBelowSM ? 'scrollable' : 'fullWidth'}
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          className={classes.tabs}
        >
          {typesShibas &&
            typesShibas.map((typesShiba, index) => (
              <Tab
                icon={typesShiba.icon}
                label={
                  <CustomThemeTypo
                    variant="h6"
                    option="type-shiba"
                    color={value === index ? ShibaOrange : ShibaWhite}
                  >
                    {typesShiba.title.toUpperCase()}
                  </CustomThemeTypo>
                }
                {...a11yProps(index)}
                key={index}
                disableRipple
                className={[classes.tab, typesShiba.tabClass]}
              />
            ))}
        </Tabs>
        <CustomTabPanel typesShiba={typesShibas[value]} />
      </StyledContainer>
    </div>
  );
};

export default TypeShiba;
