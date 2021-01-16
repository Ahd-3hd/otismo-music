import { Music } from "../../types";
import Link from "next/link";
import {
  Container,
  CardImg,
  CardDetails,
  SongName,
  AlbumName,
} from "./index.style";

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
        </CardDetails>
      </Container>
    </Link>
  );
};

export default SongCard;
