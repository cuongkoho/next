import React from "react";
import NextLink from "next/link";

export default () => {
  return (
    <>
      <h1>This page is server-side rendered</h1>
      <NextLink href="/">Home Page</NextLink>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  //setTimeout(() => console.log("fetching data....."), 2000);
  //const res = await fetch(`https://.../data`);
  //const data = await res.json();

  // Pass data to the page via props
  //return { props: { data } };
  return { props: {} };
}
