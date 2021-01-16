import { Wrapper } from "./index.style";
import Navbar from "../Navbar";
import Background from "../Background";

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
      <Background />
    </Wrapper>
  );
};

export default Layout;
