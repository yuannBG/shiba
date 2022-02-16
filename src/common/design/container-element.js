import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '112.5rem !important',
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
    paddingBottom: '9.375rem !important',
    [theme.breakpoints.down('xl')]: {
      paddingBottom: '9.375rem !important',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '3.75rem !important',
    },
  },
}));

const StyledContainer = ({children}) => {
  const classes = useStyles();
  return <Container className={classes.container}>{children}</Container>;
};

export default StyledContainer;
