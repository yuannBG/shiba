/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ScrollToELement, ScrollToELement2 } from '../../../common/utils/scroll-to-element';
import { makeStyles } from '@mui/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import minus from '../../../assets/icons/minus.svg';
import plus from '../../../assets/icons/plus.svg';
import ButtonIcon from '../../../common/design/button-icon';
import useIsMobile from '../../../common/utils/get-size-screen';
import StyledContainer from '../../../common/design/container-element';
import TitleComponent from '../../../common/design/title';
import { sentences } from '../../../common/i18';
import { ShibaOrange } from '../../../common/constants';
import CustomThemeTypo from '../../../common/design/custom-typo';

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: '6.25rem',
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '2.5625rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '1.625rem',
    },
  },
  accordion: {
    backgroundColor: theme.palette.ternary.main + ' !important',
    paddingBottom: '1.5rem',
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '1.125rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '1rem',
    },

    '&.MuiAccordion-root:before': {
      backgroundColor: theme.palette.ternary.main,
    },
    '&.MuiAccordion-root': {
      boxShadow: 'none',
    },
  },
  accordionSummary: {
    '& .MuiAccordionDetails-root': {
      paddingRight: '0 !important',
      paddingLeft: '0 !important',
    },
  },
  hr: {
    height: '1px !important',
    border: 'none',
    color: `${ShibaOrange} !important`,
    backgroundColor: `${ShibaOrange} !important`,
  },
}));

const FAQ = ({ value }) => {
  const myRef = React.createRef();
  const [openAccordeon0, setOpenAccordeon0] = useState(false);
  const [openAccordeon1, setOpenAccordeon1] = useState(false);
  const [openAccordeon2, setOpenAccordeon2] = useState(false);
  const [openAccordeon3, setOpenAccordeon3] = useState(false);
  const classes = useStyles();
  const offsetCalcul = ScrollToELement();
  const offsetCalcul2 = useIsMobile('faq');

  const faqs = [
    {
      label: sentences.FAQ.question1,
      description: sentences.FAQ.Answer1,
      icon: openAccordeon0,
    },
    {
      label: sentences.FAQ.question2,
      description: sentences.FAQ.Answer2,
      icon: openAccordeon1,
    },
    {
      label: sentences.FAQ.question3,
      description: sentences.FAQ.Answer3,
      icon: openAccordeon2,
    },
    {
      label: sentences.FAQ.question4,
      description: sentences.FAQ.Answer4,
      icon: openAccordeon3,
    },
    {
      label: sentences.FAQ.question5,
      description: sentences.FAQ.Answer5,
      icon: openAccordeon3,
    },
    {
      label: sentences.FAQ.question6,
      description: sentences.FAQ.Answer6,
      icon: openAccordeon3,
    },
  ];

  useEffect(() => {
    if (value === 4) {
      ScrollToELement2(myRef.current.offsetTop );
    }
  }, [value]);

  const handleOnclick = (number) => {
    if (number === 0) {
      setOpenAccordeon0(!openAccordeon0);
    } else if (number === 1) {
      setOpenAccordeon1(!openAccordeon1);
    } else if (number === 2) {
      setOpenAccordeon2(!openAccordeon2);
    } else if (number === 3) {
      setOpenAccordeon3(!openAccordeon3);
    }
  }

  return (
    <StyledContainer>
      <div className={classes.title} ref={myRef}>
        <TitleComponent>{sentences.FAQ.Title}</TitleComponent>
      </div>
      {faqs.map((faq, index) => (
        <div key={faq.label + index}>
          <Accordion ref={myRef} className={classes.accordion}>
            <AccordionSummary
              onClick={() => handleOnclick(index)}
              expandIcon={
                <ButtonIcon
                  onClick={() => handleOnclick(index)}
                  disableRipple
                  marginright="none"
                  icon={faq.icon ? minus : plus}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.accordionSummary}
            >
              <CustomThemeTypo variant="h6">{faq.label}</CustomThemeTypo>
            </AccordionSummary>
            <AccordionDetails>
              <CustomThemeTypo variant="subtitle2">
                {faq.description}
              </CustomThemeTypo>
            </AccordionDetails>
          </Accordion>
          <hr
            className={classes.hr}
            style={{
              width: '5rem !important',
              height: '5rem !important',
              color: `${ShibaOrange} !important`,
              backgroundColor: `${ShibaOrange} !important`,
            }}
          ></hr>
        </div>
      ))}
    </StyledContainer>
  );
};

export default FAQ;
