/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  ScrollToELement,
  ScrollToELement2,
} from '../../../common/utils/scroll-to-element';
import { Grid, Box, useTheme, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useIsMobile from '../../../common/utils/get-size-screen';
import { sentences } from '../../../common/i18';
import CustomThemeTypo from '../../../common/design/custom-typo';
import TitleComponent from '../../../common/design/title';
import StyledContainer from '../../../common/design/container-element';
import { ShibaOrange } from '../../../common/constants';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: '100%',
    paddingTop: '3.75rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '2.9375rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1.125rem',
    },
  },
  contentSteps: {
    marginTop: '1.5rem !important',
    marginBottom: '3rem !important',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.5rem !important',
      padding: '1.125rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '0.75rem !important',
      marginBottom: '1.5rem',
      padding: '1.125rem',
    },
    padding: '1.875rem',
    background:
      'linear-gradient(#222, #222), linear-gradient(to right, orange, white, orange)',
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
  sideBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('lg')]: {
      top: '0px',
      width: '8px',
    },
    position: 'absolute',
    top: '20px',
    left: 0,
    bottom: '60px',
    width: '10px',
    background:
      'linear-gradient(180deg, #A66B3F 0%, #FFFFFF 51.56%, #A66B3F 100%)',
  },
  smallBar: {
    [theme.breakpoints.down('lg')]: {
      top: '10px',
      width: '2.3rem',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    position: 'absolute',
    opacity: '0.5',
    left: '0',
    top: '35px',
    bottom: '-20px',
    width: '4.5rem',
    border: `1px solid ${ShibaOrange}`,
    borderWidth: '6px 0 0 0',
  },
  boxContent: {
    paddingLeft: '4.125rem',
    marginLeft: '3.125rem',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '2.5rem',
      marginLeft: '1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0',
      marginLeft: '0',
    },
  },
}));

const roadmapContent = [
  {
    title: sentences.Roadmap.Step1,
    content: [
      sentences.Roadmap.Content1part1,
      sentences.Roadmap.Content1part2,
    ],
  },
  {
    title: sentences.Roadmap.Step2,
    content: [sentences.Roadmap.Content2],
  },
  {
    title: sentences.Roadmap.Step3,
    content: [
      sentences.Roadmap.Content3part1,
      sentences.Roadmap.Content3part2,
      sentences.Roadmap.Content3part3,
    ],
  },
  {
    title: sentences.Roadmap.Step4,
    content: [
      sentences.Roadmap.Content4part1,
      sentences.Roadmap.Content4part2,
    ],
  },
  {
    title: sentences.Roadmap.Step5,
    content: [
      sentences.Roadmap.Content5part1,
      sentences.Roadmap.Content5part2,
      sentences.Roadmap.Content5part3,
    ],
  },
  {
    title: sentences.Roadmap.Step6,
    content: [
      sentences.Roadmap.Content6part1,
      sentences.Roadmap.Content6part2,
      sentences.Roadmap.Content6part3,
    ],
  },
];

const Roadmap = ({ value }) => {
  const myRef = React.createRef();
  const offsetCalcul = ScrollToELement();
  const classes = useStyles();
  const offsetCalcul2 = useIsMobile('start');
  const theme = useTheme();
  const matchesBelowSM = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (value === 2) {
      ScrollToELement2(myRef.current.offsetTop - offsetCalcul + offsetCalcul2);
    }
  }, [value]);

  return (
    <StyledContainer>
      <div ref={myRef}>
        <TitleComponent>{sentences.Roadmap.Title}</TitleComponent>
      </div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className={classes.mainGrid}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Box className={classes.sideBar} />
          {roadmapContent.map((n, index) => (
            <Box key={index} sx={{ position: 'relative' }}>
              <Box className={classes.smallBar} />
              <Box className={classes.boxContent}>
                <CustomThemeTypo variant="h2">
                  {n.title.toUpperCase()}
                </CustomThemeTypo>

                <Box className={classes.contentSteps}>
                  {n.content.map((content, indexContent) => (
                    <CustomThemeTypo
                      key={indexContent}
                      variant="button"
                      align={matchesBelowSM ? 'justify' : 'inherit'}
                    >
                      {content} <br />
                    </CustomThemeTypo>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>
    </StyledContainer>
  );
};

export default Roadmap;