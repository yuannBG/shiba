import { Grid } from '@mui/material';
import CustomThemeTypo from './custom-typo';

const TitleComponent = ({ children }) => {

  return (
    <Grid item xs={12}>
      <CustomThemeTypo variant="h1" align='center' >
        {children}
      </CustomThemeTypo>
    </Grid>
  );
};

export default TitleComponent;