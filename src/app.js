import { ThemeProvider } from '@mui/material/styles';
import Route from './components/route';
import theme from './common/design/theme';
import './common/design/fonts/Fasthand.css';
import '@fontsource/lato';
import '@fontsource/poppins';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Route />
    </ThemeProvider>
  );
}

export default App;
