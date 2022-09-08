import React from "react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { Counter } from "../../features/counter/Counter";
import NextLink from "next/link";

export default () => {
  return (
    <>
      <h1>This page is pre-rendered but hooked into Redux</h1>
      <NextLink href="/">Home Page</NextLink>
      <Counter />
    </>
  );
};
