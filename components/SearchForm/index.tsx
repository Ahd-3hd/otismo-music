import {
  Wrapper,
  Form,
  FormTitle,
  InputField,
  SubmitButton,
} from "./index.style";
import SearchIcon from "../../svg/SearchIcon.svg";
import { SyntheticEvent } from "react";

const SearchForm = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <FormTitle>Looking for Music ?</FormTitle>
      <Form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Search titles, albums or artists..."
        />
        <SubmitButton type="submit">
          <SearchIcon />
        </SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
