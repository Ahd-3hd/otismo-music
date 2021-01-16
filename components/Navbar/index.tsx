import { useState } from "react";
import MenuIcon from "../../svg/MenuIcon.svg";
import { Wrapper, MenuButton, Menu } from "./index.style";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const pages = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Recent Songs",
      href: "/recentsongs",
    },
    {
      title: "Recent Albums",
      href: "/recentalbums",
    },
  ];
  return (
    <Wrapper>
      <MenuButton
        onClick={() => setToggle((prevState) => !prevState)}
        toggle={toggle}
      >
        <MenuIcon />
      </MenuButton>
      <Menu pages={pages} toggle={toggle} />
    </Wrapper>
  );
};

export default Navbar;
