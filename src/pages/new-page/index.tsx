import React from "react";
import NextLink from "next/link";

export default () => {
  return (
    <>
      <h1>This page is statically rendered</h1>
      <NextLink href="/">Home Page</NextLink>
    </>
  );
};
