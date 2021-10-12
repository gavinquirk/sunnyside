import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';

const theme = {
  colors: {
    primary: {
      softRed: 'hsl(7, 99%, 70%)',
      yellow: 'hsl(51, 100%, 49%)',
      darkDesaturatedCyan: 'hsl(167, 40%, 24%)',
      darkBlue: 'hsl(198, 62%, 26%)',
      darkModerateCyan: 'hsl(168, 34%, 41%)',
    },
    Neutral: {
      veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
      veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
      darkGrayishBlue: 'hsl(232, 10%, 55%)',
      grayishBlue: 'hsl(210, 4%, 67%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <h1>We Are Creatives</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
