import Head from "next/head";
import { Wrapper } from "../styles/Home.style";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Wrapper>
        <SearchForm />
      </Wrapper>
    </>
  );
}
