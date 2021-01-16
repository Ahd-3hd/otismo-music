import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Wrapper,
  Form,
  FormTitle,
  InputField,
  SubmitButton,
  ErrorMessage,
} from "./index.style";
import SearchIcon from "../../svg/SearchIcon.svg";
import { SyntheticEvent } from "react";

const SearchForm = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [err, setErr] = useState(false);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (searchInput.trim().length > 0) {
      router.push({
        pathname: "/search",
        query: {
          q: searchInput,
        },
      });
    } else {
      setErr(true);
    }
  };
  useEffect(() => {
    if (router.query.q) {
      setSearchInput(router.query.q.toString());
    } else {
      setSearchInput("");
    }
  }, [router]);
  return (
    <Wrapper>
      <FormTitle>Looking for Music ?</FormTitle>
      <Form onSubmit={handleSubmit} err={err}>
        <InputField
          type="text"
          value={searchInput}
          placeholder="Search titles, albums or artists..."
          onChange={(e) => setSearchInput(e.target.value)}
          required
        />
        <SubmitButton type="submit">
          <SearchIcon />
        </SubmitButton>
      </Form>
      {err && <ErrorMessage>Must enter a valid search</ErrorMessage>}
    </Wrapper>
  );
};

export default SearchForm;
