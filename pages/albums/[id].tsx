import Head from "next/head";
import {
  Wrapper,
  Container,
  AlbumHeader,
  AlbumCover,
  NamesContainer,
  AlbumName,
  ArtistName,
  SongsContainer,
  Song,
} from "../../styles/AlbumPage.style";
import { Album, Music, Artist } from "../../types";

const AlbumPage = ({
  data: { musics, album },
  artistData,
}: {
  data: { musics: Music[]; album: Album };
  artistData: Artist;
}) => {
  return (
    <>
      <Head>
        <title>{album.name}</title>
      </Head>
      <Wrapper>
        <Container>
          <AlbumHeader>
            <AlbumCover img={album.images[0]} />
            <NamesContainer>
              <AlbumName>{album.name}</AlbumName>
              <ArtistName>{artistData.name}</ArtistName>
            </NamesContainer>
          </AlbumHeader>
          <SongsContainer>
            {musics.map((item: Music) => (
              <Song
                key={item.id}
                songName={item.name}
                duration={item.duration}
                licenseUrl={item.license_ccurl}
                mp3Url={item.url}
                albumImg={album.images[0]}
                artistName={artistData.name}
              />
            ))}
          </SongsContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default AlbumPage;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://musicdb.jobs.otsimo.com/api/album/${context.query.id}`,
    {
      headers: {
        authorization: process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const data = await res.json();

  const artistRes = await fetch(
    `https://musicdb.jobs.otsimo.com/api/artist/${data.album.artist_id}`,
    {
      headers: {
        authorization: process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const artistData = await artistRes.json();

  return {
    props: {
      data,
      artistData: artistData.artist,
    },
  };
}
