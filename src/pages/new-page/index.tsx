import React from "react";
import NextLink from "next/link";

export default () => {
  return (
    <>
      <h1>This page is statically rendered</h1>
      <p>{`There's no external data, this could be used for marketing pages`}</p>
      <p>{`Nextjs also support dynamic data page,
          data will be fetched at build time`}</p>
      <NextLink href="/">Home Page</NextLink>
    </>
  );
};

// This gets called at build time
export async function getStaticProps({ params }: { params: any }) {
  //setTimeout(() => console.log("building....."), 2000);
  //const res = await fetch(`https://.../posts/${params?.id}`);
  //const post = await res.json();

  // Pass post data to the page via props
  //return { props: { post } };
  return { props: {} };
}
