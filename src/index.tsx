import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from './features/counter/Counter';
import { CounterDynamic } from './features/counter/CounterDynamic';
import { StaticPage } from './Static'
import {
      ThemeProvider,
      createTheme,
} from '@mui/material';

const container = document.getElementById('root')!;
const root = createRoot(container);
export const muiTheme = createTheme({
      palette: {
          primary: {
              main: '#30845e',
          },
          background: {
              default: '#fff',
          },
      },
    typography: {
        fontFamily: '"Basis Grotesque Pro", sans-serif',
    },
});

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={muiTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/static" element={<StaticPage />} />
                        <Route path="counter" element={<Counter />} />
                        <Route path="counter/:number" element={<CounterDynamic />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
