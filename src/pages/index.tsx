import React, { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Home from "../App";
import reportWebVitals from "../reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "../features/counter/Counter";
import { CounterDynamic } from "../features/counter/CounterDynamic";
import { StaticPage } from "../Static";
import { ThemeProvider, createTheme } from "@mui/material";

function SafeHydrate({ children }: { children: ReactNode }) {
  return (
    <div suppressHydrationWarning={true}>
      {typeof document === "undefined" ? null : children}
    </div>
  );
}

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

export default function App() {
  if (typeof document === "undefined") {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <SafeHydrate>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/static" element={<StaticPage />} />
              <Route path="counter" element={<Counter />} />
              <Route path="counter/:number" element={<CounterDynamic />} />
            </Routes>
          </BrowserRouter>
        </SafeHydrate>
      </ThemeProvider>
    </Provider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
