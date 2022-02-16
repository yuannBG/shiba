import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import StyledContainer from '../../common/design/container';
import TypeShiba from './type-shiba';
import Intro from './intro';
import Roadmap from './roadmap';
import Benefits from './benefits';
import Artist from './artist';
import Originals from './originals';
import HowToGet from './how-to-get';
import MeetTheTeam from './meet-the-team';
import JoinCommunity from './join-the-community';
import AudioFile from '../../assets/audio/lore-master.wav';
import FAQ from './faq';
import { useTheme, useMediaQuery } from '@mui/material';
import CustomThemeTypo from '../../common/design/custom-typo';
import DiscordCircle from '../discord/discord-cicle';

export function HomePage() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const matchesBelowSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesBelowMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesBelowLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesBelowXL = useMediaQuery(theme.breakpoints.down('xl'));
  const matchesBelowDesktop = useMediaQuery(theme.breakpoints.down('desktop'));

  const sizeScreen = () => {
    if (matchesBelowSM) return 'down SM';
    if (matchesBelowMD) return 'down md';
    if (matchesBelowLG) return 'down lg';
    if (matchesBelowXL) return 'down xl';
    if (matchesBelowDesktop) return 'down desktop';
    return 'Above desktop';
  };

  return (
    <>
      <Header value={value} setValue={setValue} />
      <StyledContainer>
        <div style={{paddingTop : '5rem'}}>

        <CustomThemeTypo variant="h1" align={'center'}>
          {sizeScreen()}
        </CustomThemeTypo>
        </div>

        {/* <Intro value={value} /> */}
        <TypeShiba valueHeader={value} />
        <Artist />
        <Benefits value={value} />
        <Roadmap value={value} />
        <JoinCommunity />
        <Originals />
        <MeetTheTeam value={value} />
        <HowToGet />
        <FAQ value={value} />
        {/* <figure>
          <figcaption>Listen to the T-Rex:</figcaption>
          <audio controls src={AudioFile}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>*/}
      </StyledContainer>
      <DiscordCircle />
      <Footer value={value} setValue={setValue} />
    </>
  );
}

export default HomePage;
