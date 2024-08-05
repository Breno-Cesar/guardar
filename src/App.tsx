import { BrowserRouter } from "react-router-dom";
import RoutesSystem from "./Routes";
import { defaultTheme } from "./Styles/themes/default";
import { GlobalStyle } from "./Styles/themes/global";
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <RoutesSystem />
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
