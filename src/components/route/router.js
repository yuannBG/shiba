/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../home/home-page';
import Discord from '../discord';
import PageNotFound from './page-not-found';
import { discord } from './routes-constant';
import { makeStyles } from '@mui/styles';
import backgroundImage from '../../assets/images/background-shiba-clan.png';
import backgroundImageMini from '../../assets/images/background-shiba-clan-min.png';

export function Router() {
    // const classes = useStyles();

  return (
    // <div className={classes.discordSteps}>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path={discord} element={<Discord />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

    // // version Discord only
    // <Routes>
    //   {/* <Route exact path="/" element={<HomePage />} /> */}
    //   <Route exact path={discord} element={<Discord />} />
    //   <Route path="*" element={<Navigate to="/discord" />} />
    //   {/* <Route path="*" element={<PageNotFound />} /> */}
    // </Routes>


    // </div>
  );
}

export default Router;