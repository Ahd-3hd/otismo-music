import { useContext } from "react";
import { Music } from "../../types";
import Link from "next/link";
import {
  Container,
  CardImg,
  CardDetails,
  SongName,
  AlbumName,
  ArtistName,
  Play,
  License,
} from "./index.style";
import PlayIcon from "../../svg/PlayIcon.svg";
import { MusicContext } from "../../context/MusicContext";

const SongCard = ({
  data: {
    name,
    artist_name,
    license_ccurl,
    album_images,
    url,
    album_name,
    id,
    duration,
  },
}: {
  data: Music;
}) => {
  const music = useContext(MusicContext);

  const getLicense = (url) => {
    const output = url.split("by")[1].split("/")[0];
    return output ? output.toUpperCase() : "";
  };
  return (
    <Container>
      <CardImg img={album_images[2]} />
      <CardDetails className="details">
        <Link href={`/songs/${id}`} passHref>
          <SongName>{name}</SongName>
        </Link>
        <AlbumName>{album_name}</AlbumName>
        <ArtistName>{artist_name}</ArtistName>
        <Play
          onClick={() =>
            music.setMusicPlayer((prevState) => ({
              ...prevState,
              url: [
                {
                  name,
                  musicSrc: url,
                  cover: album_images[0],
                  singer: artist_name,
                  duration,
                },
              ],
              play: true,
            }))
          }
        >
          <PlayIcon />
        </Play>
        <Link href={license_ccurl} passHref>
          <License>CC BY{getLicense(license_ccurl)}</License>
        </Link>
      </CardDetails>
    </Container>
  );
};

export default SongCard;
