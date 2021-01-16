import { useEffect } from "react";
import Head from "next/head";
import { Wrapper } from "../styles/Home.style";
import MusicGrid from "../components/MusicGrid";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <MusicGrid data={data} title="Latest Additions" />
      </Wrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://musicdb.jobs.otsimo.com/api/recent/musics", {
    headers: {
      authorization: process.env.NEXT_PUBLIC_TOKEN,
    },
  });

  const data = await res.json();
  return {
    props: {
      data: data.musics,
    },
  };
}
