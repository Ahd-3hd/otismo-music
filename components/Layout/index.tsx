import { Wrapper } from "./index.style";
import Navbar from "../Navbar";
import Background from "../Background";
import SearchForm from "../../components/SearchForm";

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <SearchForm />
      {children}
      <Background />
    </Wrapper>
  );
};

export default Layout;
