import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '60rem !important',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '40rem !important',
      paddingRight: '2.5rem !important',
      paddingLeft: '2.5rem !important',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '40rem !important',
      paddingRight: '1.5rem !important',
      paddingLeft: '1.5rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30rem !important',
      paddingRight: '1.5rem !important',
      paddingLeft: '1.5rem !important',
    },
  },
}));

const StyledContainer = ({children}) => {
  const classes = useStyles();

  // eslint-disable-next-line react/jsx-pascal-case
  return <Container className={classes.container}>{children}</Container>;
};

export default StyledContainer;
