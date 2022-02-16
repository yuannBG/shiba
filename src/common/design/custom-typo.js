import React from 'react';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const CustomThemeTypo = ({
  variant,
  align,
  color,
  nowrap = false,
  children,
  fontweight,
  fontsize,
  option
}) => {
  let customThemeTypo = createTheme();
  customThemeTypo.typography.h1 = {
    ...theme.typography.h1,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('xl')]: {
      fontSize: '56px', //56
      lineHeight: '56px', //56
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.625rem', //42
      lineHeight: '2.625rem', //42
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.875rem', //30
      lineHeight: '1.875rem', //30
    },
  };

  if (option === 'discord') {
    customThemeTypo.typography.h1 = {
      ...theme.typography.h1,
      color: color !== undefined ? color : 'white',
      [theme.breakpoints.down('lg')]: {
        fontSize: '3rem', //42
        lineHeight: '3rem', //42
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.875rem', //30
        lineHeight: '1.875rem', //30
      },
    };
  }

  if (option === 'medaillon') {
    customThemeTypo.typography.h1 = {
      ...theme.typography.h1,
      fontSize: '2.2rem', //36
      lineHeight: '2.2rem', //36
      color: color !== undefined ? color : 'white',
      [theme.breakpoints.down('desktop')]: {
        fontSize: '1.5rem', //24
        lineHeight: '2.25rem', //36
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '1rem', //16
        lineHeight: '1rem', //16
      },
      '@media (max-width:400px)': {
        fontSize: '0.6875rem', //11
        lineHeight: '0.6875rem', //11
      },
    };
  }

  customThemeTypo.typography.h2 = {
    ...theme.typography.h2,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('desktop')]: {
      fontSize: '40px', //24
      lineHeight: '40px', //24
    },
    [theme.breakpoints.down('xl')]: {
      fontSize: '2.25rem', //24
      lineHeight: '2.25rem', //24
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.5rem', //24
      lineHeight: '1.5rem', //24
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.125rem', //18
      lineHeight: '1.625rem', //26
    },
  };

  if (option === 'discord') {
    customThemeTypo.typography.h2 = {
      ...theme.typography.h2,
      color: color !== undefined ? color : 'white',
      [theme.breakpoints.down('lg')]: {
        fontSize: '2.2rem', //36
        lineHeight: '2.2rem', //36
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem', //36
        lineHeight: '1.5rem', //36
      },
    };
  }

  customThemeTypo.typography.h3 = {
    ...theme.typography.h3,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('desktop')]: {
      fontSize: '1.5rem', //24
      lineHeight: '2rem', //32
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem', //14
      lineHeight: '1.125rem', //18
    },
  };

  if (option === 'header') {
    customThemeTypo.typography.h3 = {
      ...theme.typography.h3,
      fontFamily: 'Poppins',
      fontSize: '1.375rem', //22
      lineHeight: '1.375rem', //22
      color: color !== undefined ? color : 'white',
      [theme.breakpoints.down('lg')]: {
        fontSize: '1rem', //16
        lineHeight: '1rem', //16
        fontWeight: 400,
      },
    };
  }

  if (option === 'type-shiba') {
    customThemeTypo.typography.h3 = {
      ...theme.typography.h3,
      fontSize: '2.625rem', //42
      lineHeight: '2.625rem', //42
      fontWeight: 900,
      color: color !== undefined ? color : 'white',
      [theme.breakpoints.down('lg')]: {
        fontSize: '1.875rem', //30
        lineHeight: '1.875rem', //30
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem', //24
        lineHeight: '1.5rem', //24
      },
    };
  }

    if (option === 'type-shiba-subtitle') {
      customThemeTypo.typography.h3 = {
        ...theme.typography.h3,
        fontSize: '2.5rem', //40
        lineHeight: '3.375rem', //54
        fontWeight: 400,
        color: color !== undefined ? color : 'white',
        [theme.breakpoints.down('lg')]: {
          fontSize: '1.25rem', //20
          lineHeight: '1.75rem', //28
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '1rem', //16
          lineHeight: '1.375rem', //22
        },
      };
    }

  if (option === 'header-menu') {
    customThemeTypo.typography.h3 = {
      ...theme.typography.h3,
      [theme.breakpoints.down('md')]: {
        fontSize: '1.125rem', //18
        lineHeight: '1.125rem', //18
      },
    };
  }

  customThemeTypo.typography.h4 = {
    ...theme.typography.h4,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.375rem', //22
      lineHeight: '1.625rem', //26
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem', //14
      lineHeight: '1.125rem', //18
    },
  };

  if (option === 'benefits') {
    customThemeTypo.typography.h4 = {
      ...theme.typography.h4,
      color: color !== undefined ? color : 'white',
      [theme.breakpoints.down('desktop')]: {
        fontSize: '1.25rem', //20
        lineHeight: '1.625rem', //26
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '1.125rem', //18
        lineHeight: '1.625rem', //26
      },
    };
  }

  customThemeTypo.typography.h5 = {
    ...theme.typography.h5,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.4rem',
      lineHeight: '1.8rem', //20
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: '1.25rem', //20
    },
  };

  customThemeTypo.typography.h6 = {
    ...theme.typography.h6,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.125rem', //18
      lineHeight: '1.25rem', //20
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem', //16
      lineHeight: '1.5rem', //24
    },
  };


  if (option === 'type-shiba') {
    customThemeTypo.typography.h6 = {
      ...theme.typography.h6,
      fontWeight: 900,
      fontSize: '1.875rem', //30
      lineHeight: '1.875rem', //30
      color: color !== undefined ? color : 'white',
      [theme.breakpoints.down('xl')]: {
        fontSize: '0.875rem', //14
        lineHeight: '1.125rem', //18
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '0.875rem', //14
        lineHeight: '1rem', //16
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem', //16
        lineHeight: '1.125rem', //18
      },
    };
  }

  customThemeTypo.typography.subtitle1 = {
    ...theme.typography.subtitle1,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.25rem', //20
      lineHeight: '1.75rem', //28
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem', //20
      lineHeight: '1.75rem', //28
    },
  };

  customThemeTypo.typography.subtitle2 = {
    ...theme.typography.subtitle2,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem', //16
      lineHeight: '1.375rem', //22
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem', //14
      lineHeight: '1.375rem', //22
    },
  };

 if (option === 'benefits') {
   customThemeTypo.typography.subtitle2 = {
     ...theme.typography.subtitle2,
     color: color !== undefined ? color : 'white',
     [theme.breakpoints.down('desktop')]: {
       fontSize: '1.125rem', //18
       lineHeight: '1.5rem', //24
     },
     [theme.breakpoints.down('xl')]: {
       fontSize: '0.875rem', //14
       lineHeight: '1.125rem', //18
     },
     [theme.breakpoints.down('lg')]: {
       fontSize: '0.75rem', //12
       lineHeight: '1rem', //16
     },
   };
 }

  if (option === 'type-shiba') {
    customThemeTypo.typography.subtitle2 = {
      ...theme.typography.subtitle2,
      fontSize: '1.5rem', //24
      lineHeight: '1.875rem', //30
      color: color !== undefined ? color : 'white',
      [theme.breakpoints.down('lg')]: {
        fontSize: '1rem', //16
        lineHeight: '1.25rem', //20
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.875rem', //14
        lineHeight: '1rem', //16
      },
    };
  }

  
  if (option === 'how-to-get') {
    customThemeTypo.typography.h6 = {
      ...theme.typography.h6,
      color: color !== undefined ? color : 'white',
      [theme.breakpoints.down('desktop')]: {
        fontSize: '1.625rem', //26
        lineHeight: '1.625rem', //26
      },
      [theme.breakpoints.down('xl')]: {
        fontSize: '1.3375rem', //21.5
        lineHeight: '1.375rem', //22
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '1.0437rem', //17
        lineHeight: '1.375rem', //22
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '0.9375rem', //16
        lineHeight: '20px', //26
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.375rem', //22
        lineHeight: '1.5rem', //24
      },
    };
  }

  if (option === 'how-to-get') {
    customThemeTypo.typography.subtitle2 = {
      ...theme.typography.subtitle2,
      color: color !== undefined ? color : 'white',
      [theme.breakpoints.down('desktop')]: {
        fontSize: '22px', //14
        lineHeight: '28px', //18
      },
      [theme.breakpoints.down('xl')]: {
        fontSize: '0.875rem', //14
        lineHeight: '1.125rem', //18
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '0.8125rem', //14
        lineHeight: '16px', //18
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem', //16
        lineHeight: '1.5rem', //24
      },
    };
  }

  if (option === 'how-to-get-button') {
    customThemeTypo.typography.subtitle2 = {
      ...theme.typography.subtitle2,
      fontSize: '1.5rem', //24
      lineHeight: '1.5rem', //24
      color: color !== undefined ? color : 'white',
      [theme.breakpoints.down('desktop')]: {
        fontSize: '1.125rem', //18
        lineHeight: '1.125rem', //18
      },
      [theme.breakpoints.down('xl')]: {
        fontSize: '1.125rem', //18
        lineHeight: '1.125rem', //18
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '0.875rem', //16
        lineHeight: '1rem', //16
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '12.8px', //18
        lineHeight: '12.8px', //18
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.125rem', //18
        lineHeight: '1.5rem', //24
      },
      '@media (max-width:370px)': {
        fontSize: '1rem', //16
        lineHeight: '22px', //24
      },
      '@media (max-width:320px)': {
        fontSize: '15px', //16
        lineHeight: '20px', //24
      },
    };
  }

  if (option === 'join') {
    customThemeTypo.typography.subtitle2 = {
      ...theme.typography.subtitle2,
      fontSize: '1.75rem', //28
      lineHeight: '3.75rem', //60
      color: color !== undefined ? color : 'white',
      [theme.breakpoints.down('xl')]: {
        fontSize: '1.125rem', //18
        lineHeight: '1.5rem', //24
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '1rem', //16
        lineHeight: '1.5rem', //24
      },
    };
  }

  customThemeTypo.typography.body1 = {
    ...theme.typography.body1,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('lg')]: {
      fontSize: '0.875rem', //14
      lineHeight: '1.5rem', //24
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem', //16
      lineHeight: '1.5rem', //24
    },
  };

  customThemeTypo.typography.body2 = {
    ...theme.typography.body2,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('xl')]: {
      fontSize: '57%', //14
      lineHeight: '57%', //14
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '0.75rem', //12
      lineHeight: '0.75rem', //12
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem', //12
      lineHeight: '0.75rem', //12
    },
  };

  customThemeTypo.typography.button = {
    ...theme.typography.button,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.125rem', //18
      lineHeight: '1.5rem', //24
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem', //14
      lineHeight: '1.125rem', //18
    },
  };

  customThemeTypo.typography.caption = {
    ...theme.typography.caption,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('desktop')]: {
      fontSize: '1.25rem', //20
      lineHeight: '1.125rem', //18
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem', //24
      lineHeight: '1.5rem', //24
    },
  };

  customThemeTypo.typography.overline = {
    ...theme.typography.overline,
    color: color !== undefined ? color : 'white',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.125rem', //18
      lineHeight: '1.5rem', //24
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem', //16
      lineHeight: '1.5rem', //24
    },
  };

  return (
    <ThemeProvider theme={customThemeTypo}>
      <Typography
        variant={variant}
        color={color}
        noWrap={nowrap}
        align={align}
        fontWeight={fontweight}
        fontSize={fontsize}
      >
        {children}
      </Typography>
    </ThemeProvider>
  );
};

export default CustomThemeTypo;
