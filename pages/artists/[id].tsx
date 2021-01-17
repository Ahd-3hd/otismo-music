import Head from "next/head";
import Link from "next/link";
import { GetArtistResponse } from "../../types";
import {
  Wrapper,
  ArtistName,
  Subtitle,
  AlbumsContainer,
  AlbumCard,
} from "../../styles/ArtistPage.style";
import MusicGrid from "../../components/MusicGrid";

const ArtistPage = ({ data }: { data: GetArtistResponse }) => {
  return (
    <>
      <Head>
        <title>{data.artist.name}</title>
      </Head>
      <Wrapper>
        <ArtistName>{data.artist.name}</ArtistName>
        <Subtitle>Albums</Subtitle>
        <AlbumsContainer>
          {data.albums.map((item) => {
            return (
              <Link href={`/albums/${item.id}`} passHref key={item.id}>
                <AlbumCard img={item.images[2]} albumName={item.name} />
              </Link>
            );
          })}
        </AlbumsContainer>
        <MusicGrid data={data.musics} title="Songs" />
      </Wrapper>
    </>
  );
};

export default ArtistPage;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://musicdb.jobs.otsimo.com/api/artist/${context.query.id}`,
    {
      headers: {
        authorization: process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const data: GetArtistResponse = await res.json();

  return {
    props: {
      data,
    },
  };
}
