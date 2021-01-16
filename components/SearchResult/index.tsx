import { Music } from "../../types";
import { Wrapper, NoResult } from "./index.style";
import MusicGrid from "../MusicGrid";

const SearchResult = ({ data }: { data: Music[] | null }) => {
  if (!data)
    return <NoResult>No Results Found... try different keywords</NoResult>;

  return (
    <Wrapper>
      <MusicGrid data={data} title="Search Result" />
    </Wrapper>
  );
};

export default SearchResult;
