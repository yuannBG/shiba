import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ShibaWhite } from '../constants';
import CustomThemeTypo from './custom-typo';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    background:
      'linear-gradient(#222, #222), linear-gradient(to right, white, black, white) !important',
    borderRadius: '1rem !important',
    border: '4px solid transparent !important',
    backgroundRepeat: 'no-repeat !important',
    backgroundOrigin: 'padding-box, border-box !important',
    borderWidth: '10px !important',
    position: 'relative !important',

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
  iconButton1: {
    backgroundColor: theme.palette.ternary.opacity10,
    '&:hover': {
      opacity: 0.7,
    },
    width: '35.375rem',
    height: '6.75rem',
    [theme.breakpoints.down('md')]: {
      height: '3.75rem',
      width: '14.375rem',
    },
  },
  iconButton2: {
    backgroundColor: theme.palette.ternary.opacity10,
    '&:hover': {
      opacity: 0.7,
    },
    [theme.breakpoints.up('sm')]: {
      height: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      height: '3.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiTypography-body2': {
        paddingLeft: '1rem !important',
      },
      height: '4.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      height: '5rem',
    },
    [theme.breakpoints.up('desktop')]: {
      height: '5.625rem',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.2rem !important',
      margin: 'auto !important',
    },
    // [theme.breakpoints.up('lg')]: {
    //   height: '5.625rem',
    // },
  },
  imgDiscord: {
    // marginRight: '1rem !important',
    height: '2.625rem',
    width: '3.375rem',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '1rem',
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: '0.5rem',
      height: '1.5rem',
      width: '1.875rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      height: '1.125rem',
      width: '1.5rem',
    },
  },
  imgTwitter: {
    // marginRight: '1rem !impokrtant',
    height: '2.625rem',
    width: '3.25rem',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '1rem',
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: '0.5rem',
      height: '1.5rem',
      width: '1.875rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      height: '1.125rem',
      width: '1.125rem',
    },
  },
}));

const ButtonIconBig = ({
  onClick,
  text,
  icon,
  option,
  color = ShibaWhite,
}) => {
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      onClick={onClick}
      className={[
        option === 1
          ? classes.iconButton1
          : classes.iconButton2,
        classes.iconButton,
      ]}
      endIcon={
        <img
          alt={icon}
          src={icon}
          className={
            option === 2
              ? classes.imgDiscord
              : option === 3
              ? classes.imgTwitter
              : undefined
          }
        />
      }
    >
      <CustomThemeTypo color={color} variant={'body2'}>
        {text.toUpperCase()}
      </CustomThemeTypo>
    </Button>
  );
};

export default ButtonIconBig;
