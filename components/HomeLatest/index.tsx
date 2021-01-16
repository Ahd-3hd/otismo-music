import { Music } from "../../types";
import SongCard from "../SongCard";
import { Wrapper, Title, SongsContainer } from "./index.style";
const HomeLatest = ({ data }: { data: Music[] }) => {
  console.log(data[0]);
  return (
    <Wrapper>
      <Title>Latest Additions</Title>
      <SongsContainer>
        {data.map((item: Music) => (
          <SongCard key={item.id} data={item} />
        ))}
      </SongsContainer>
    </Wrapper>
  );
};

export default HomeLatest;
