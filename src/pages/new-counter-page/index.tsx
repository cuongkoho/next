import React from "react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { Counter } from "../../features/counter/Counter";

export default () => {
  return (
    <Provider store={store}>
      <h1>This page is pre-rendered but hooked into Redux</h1>
      <Counter />
    </Provider>
  );
};
