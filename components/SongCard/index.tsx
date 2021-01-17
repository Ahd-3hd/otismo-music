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
  return (
    <Container>
      <CardImg img={album_images[2]} />
      <CardDetails className="details">
        <Link href={`/songs/${id}`} passHref>
          <SongName>{name}</SongName>
        </Link>
        <AlbumName>{album_name}</AlbumName>
        <AlbumName>{artist_name}</AlbumName>
        <Play
          onClick={() =>
            music.setMusicPlayer({
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
            })
          }
        >
          <PlayIcon />
        </Play>
      </CardDetails>
    </Container>
  );
};

export default SongCard;
