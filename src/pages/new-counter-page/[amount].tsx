import React from "react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { CounterDynamic } from "../../features/counter/CounterDynamic";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { amount } = router.query;
  return (
    <Provider store={store}>
      <h1>This page is pre-rendered but hooked into Redux</h1>
      <CounterDynamic amount={Number(amount)} />
    </Provider>
  );
};
