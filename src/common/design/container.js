import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: '3.125% !important',
    paddingRight: '3.125% !important',
    marginLeft: '0 !important',
    marginRight: '0 !important',
    minWidth: '100% !important',

    backgroundColor: theme.palette.ternary.main,
    // backgroundColor: 'transparent',

    [theme.breakpoints.down('lg')]: {
      paddingRight: '4.68% !important',
      paddingLeft: '4.68% !important',
    },
    [theme.breakpoints.down('md')]: {
      paddingRight: '1.125rem !important',
      paddingLeft: '1.125rem !important',
    },
  },
}));

const StyledContainer = ({children}) => {
  const classes = useStyles();

  return <Container className={classes.container}>{children}</Container>;
};

export default StyledContainer;
