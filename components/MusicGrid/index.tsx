import { Music } from "../../types";
import SongCard from "../SongCard";
import { Wrapper, Title, SongsContainer } from "./index.style";
const MusicGrid = ({ data, title }: { data: Music[]; title: string }) => {
  console.log(data[0]);
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SongsContainer>
        {data.map((item: Music) => (
          <SongCard key={item.id} data={item} />
        ))}
      </SongsContainer>
    </Wrapper>
  );
};

export default MusicGrid;
