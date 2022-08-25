import React from "react";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import NextLink from "next/link";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div>
        <h2> Next Routes </h2>
        <ul>
          <li>
            <NextLink href="/new-page">New Static Page</NextLink>
          </li>
          <li>
            <NextLink href="/new-ssr-page">New Pre-rendered Page</NextLink>
          </li>
          <li>
            <NextLink href="/new-counter-page">New Counter</NextLink>
          </li>
          <li>
            <NextLink href="/new-counter-page/1">New Counter From 1</NextLink>|{" "}
            <NextLink href="/new-counter-page/100">
              New Counter From 100
            </NextLink>
          </li>
        </ul>
      </div>
      <div>
        <h2>React Routes </h2>
        <ul>
          <li>
            <Link to="/static">Static Page</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/counter/1">Count From 1</Link> |{" "}
            <Link to="/counter/100">Count From 100</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
