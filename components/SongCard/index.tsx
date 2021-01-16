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

const SongCard = ({
  data: { name, artist_name, license_ccurl, album_images, url, album_name, id },
}: {
  data: Music;
}) => {
  return (
    <Link href={`/songs/${id}`} passHref>
      <Container>
        <CardImg img={album_images[2]} />
        <CardDetails className="details">
          <SongName>{name}</SongName>
          <AlbumName>{album_name}</AlbumName>
          <AlbumName>{artist_name}</AlbumName>
          <Play>
            <PlayIcon />
          </Play>
        </CardDetails>
      </Container>
    </Link>
  );
};

export default SongCard;
