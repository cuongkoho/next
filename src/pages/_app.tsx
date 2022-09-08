import React, { ReactNode, useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Home from "../App";
import reportWebVitals from "../reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "../features/counter/Counter";
import { CounterDynamic } from "../features/counter/CounterDynamic";
import { StaticPage } from "../Static";
import { ThemeProvider, createTheme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        background: papayawhip;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
    `}
  />
);

export const createEmotionCache = () => {
  return createCache({ key: "css", prepend: true });
};
const clientSideEmotionCache = createEmotionCache();

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

export default function App(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [isDocumentDefined, setIsDocumentDefined] = useState(false);

  useEffect(() => {
    if (global?.window) {
      setIsDocumentDefined(true);
    }
  }, [global?.window]);

  if (!isDocumentDefined) {
    return <p>loading</p>;
  }

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={muiTheme}>
          <Component {...props} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
