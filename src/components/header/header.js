import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tab,
  Tabs,
  Button,
  Link,
  useTheme,
  ListItem,
  List,
  SwipeableDrawer,
  Grid,
  useMediaQuery,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import LogoClashOfClan from '../../assets/logos/logo-clash-of-shiba.svg';
import ButtonIcon from '../../common/design/button-icon';
import menu_icon from '../../assets/icons/menu.svg'; 
import close_menu_icon from '../../assets/icons/close_menu.svg'; 
import MediaIcons from '../../common/design/media-icons';
import CustomThemeTypo from '../../common/design/custom-typo';
import { ShibaWhite, ShibaOrange } from '../../common/constants';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: '1400 !important',
    backgroundColor: theme.palette.ternary.main + ' !important',
    paddingTop: '2.8125rem',
    paddingBottom: '2.8125rem',
    paddingLeft: '3.75rem',
    paddingRight: '3.75rem',
    marginLeft: '0',
    marginRight: '0',
    minWidth: '100%',

    [theme.breakpoints.down('lg')]: {
      paddingTop: '2rem',
      paddingBottom: '2rem',
      paddingRight: '3rem',
      paddingLeft: '3rem',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '1.25rem',
      paddingBottom: '1.25rem',
      paddingRight: '1.125rem',
      paddingLeft: '1.125rem',
    },
  },
  toolbarMargin: {
    [theme.breakpoints.down('sm')]: { marginBottom: '6rem' },
    [theme.breakpoints.up('sm')]: { marginBottom: '6.5rem' },
    [theme.breakpoints.up('md')]: { marginBottom: '8rem' },
    [theme.breakpoints.up('lg')]: { marginBottom: '9.625rem' },
    marginBottom: '4rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  buttonLogo: {
    padding: '0 !important',
    maxWidth: '17rem !important',
    backgroundColor: 'transparent !important',
    justifyContent: 'space-between !important',
    [theme.breakpoints.down('md')]: { paddingLeft: '0 !important' },
    [theme.breakpoints.up('md')]: { paddingRight: '50px !important' },
  },
  drawer: {
    zIndex: 1200,
    backgroundColor: theme.palette.ternary.main + ' !important',
    width: '100%',
  },
  list: {
    marginTop: '5.375rem !important',
    marginBottom: 'auto !important',
    margin: 'auto !important',
  },
  listItem: {
    backgroundColor: 'transparent !important',
    marginBottom: '3rem !important',
    justifyContent: 'center !important',
  },
  tabs: {
    marginRight: '15px',
    marginLeft: '15px',
    '& .MuiTabs-indicator': {
      backgroundColor: 'transparent',
    },
  },
  tab: {
    textTransform: 'none  !important',
    fontWeight: 400 + ' !important',
    fontSize: '1rem  !important',
    minWidth: '5rem  !important',
    color: theme.palette.primary.main + ' !important',
    '&:hover': {
      opacity: 0.7,
    },
  },
  logo: {
    [theme.breakpoints.up('lg')]: {
      height: '6.375rem',
      width: '21.25rem',
      marginBottom: 'auto',
    },
    [theme.breakpoints.down('lg')]: {
      height: '3.75rem',
      width: '12.5rem',
      marginBottom: 'auto',
    },
    [theme.breakpoints.down('sm')]: { width: '10rem', height: '2.5rem' },
  },
}));

const Header = ({value, setValue}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const tabsNames = [
    'About',
    'Benefits',
    'Roadmap',
    'Team',
    'FAQ',
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickMenu = () => {
    setValue('Home');
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const tabs = (
    <>
        <Grid
          container
          item
          md={7}
          alignItems="center"
          justifyContent={{
            xs: 'center',
            sm: 'center',
            md: 'center',
            lg: 'center',
            xl: 'center',
          }}
        >
          <Tabs value={value} onChange={handleChange} className={classes.tabs}>
            {tabsNames &&
              tabsNames.map((tabsName, index) => (
                <Tab
                  label={
                    <CustomThemeTypo
                      variant="h3"
                      color={value === index ? ShibaOrange : ShibaWhite}
                      fontweight={value === index ? 600 : 400}
                      option="header"
                    >
                      {tabsName.toUpperCase()}
                    </CustomThemeTypo>
                  }
                  {...a11yProps(index)}
                  key={index}
                  disableRipple
                  className={classes.tab}
                />
              ))}
          </Tabs>
        </Grid>
      <MediaIcons />
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onOpen={() => {
          setOpenDrawer(true);
        }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding className={classes.list}>
          {tabsNames &&
            tabsNames.map((tabsName, index) => (
              <ListItem
                key={tabsName}
                divider
                button
                component={Link}
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(index);
                }}
                selected={value === index}
                className={classes.listItem}
              >
                <CustomThemeTypo
                  variant="h3"
                  option="header-menu"
                  align="center"
                >
                  {tabsName.toUpperCase()}
                </CustomThemeTypo>
              </ListItem>
            ))}
        </List>
      </SwipeableDrawer>
      <ButtonIcon
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        disableRipple
        marginright="none"
        icon={openDrawer ? close_menu_icon : menu_icon}
      />
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters className={classes.toolbar}>
            <Grid
              container
              item
              md={3}
              alignItems="center"
              justifyContent={{
                xs: 'center',
                sm: 'center',
                md: 'flex-start',
                lg: 'flex-start',
                xl: 'flex-start',
              }}
            >
              <Button
                component={Link}
                disableRipple
                className={classes.buttonLogo}
                onClick={handleClickMenu}
              >
                <img
                  alt={LogoClashOfClan}
                  src={LogoClashOfClan}
                  className={classes.logo}
                />
              </Button>
            </Grid>
            {matchesBelowMD ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
