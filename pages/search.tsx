import Head from "next/head";
import SearchResult from "../components/SearchResult";
import { Wrapper } from "../styles/Search.style";
import { Music } from "../types";

const Search = ({ data }: { data: Music[] | null }) => {
  return (
    <>
      <Head>
        <title>Search Result</title>
      </Head>
      <Wrapper>
        <SearchResult data={data} />
      </Wrapper>
    </>
  );
};

export async function getServerSideProps(context) {
  const query = context.query.q;
  const url = `https://musicdb.jobs.otsimo.com/api/music/search?q=${query}`;
  const res = await fetch(url, {
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

export default Search;
