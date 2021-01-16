import { useState, useEffect } from "react";
import MenuIcon from "../../svg/MenuIcon.svg";
import { Wrapper, MenuButton, Menu } from "./index.style";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    window.addEventListener("load", () => {
      if (window.pageYOffset >= 150) setScrolled(true);
    });
    window.addEventListener("scroll", () => {
      window.pageYOffset >= 150 ? setScrolled(true) : setScrolled(false);
    });
  }, []);
  return (
    <Wrapper scrolled={scrolled}>
      <MenuButton
        onClick={() => setToggle((prevState) => !prevState)}
        toggle={toggle}
        scrolled={scrolled}
      >
        <MenuIcon />
      </MenuButton>
      <Menu pages={pages} toggle={toggle} scrolled={scrolled} />
    </Wrapper>
  );
};

export default Navbar;
