import {
  IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    backgroundColor: theme.palette.ternary.opacity10,
    height: '2rem',
    width: '2rem',
    [theme.breakpoints.down('lg')]: {
      height: '1.2rem',
      width: '1.2rem',
    },
  },
  img: {
    height: '3rem',
    width: '3rem',
    [theme.breakpoints.down('lg')]: {
      height: '2.25rem',
      width: '2.25rem',
    },
  },
}));

const ButtonIcon = ({
  onClick,
  icon,
  iconHover,
  disableRipple = true,
}) => {
  const classes = useStyles();
  const [iconTeBeDisplayed, setIconTeBeDisplayed] = useState(icon);

  const changeIcon = () => {
    if(iconHover){
      setIconTeBeDisplayed(iconHover);
    }
  }

  const changeIcon2 = () => {
    if (iconHover) {
      setIconTeBeDisplayed(icon);
    }
  };

  return (
    <IconButton
      onMouseOver={() => changeIcon()}
      onMouseLeave={() => changeIcon2()}
      onClick={onClick}
      disableRipple={disableRipple}
      className={classes.iconButton}
    >
      <img
        alt={iconTeBeDisplayed}
        src={iconTeBeDisplayed}
        className={classes.img}
      />
    </IconButton>
  );
};

export default ButtonIcon;
