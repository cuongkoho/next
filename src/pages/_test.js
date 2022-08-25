// import App from 'next/app'
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { store } from "../app/store";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#30845e",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: '"Basis Grotesque Pro", sans-serif',
  },
});

function MyApp({ Component, pageProps }) {
  return;
  <ThemeProvider theme={muiTheme}>
    <Component {...pageProps} />;
  </ThemeProvider>;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
