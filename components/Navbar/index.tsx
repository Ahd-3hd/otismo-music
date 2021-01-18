import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import {
  Wrapper,
  BackButton,
  HomeLink,
  HomeDarkContainer,
} from "./index.style";
import Link from "next/link";
import { MusicContext } from "../../context/MusicContext";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const music = useContext(MusicContext);
  const handleBack = () => {
    router.back();
  };
  useEffect(() => {
    window.addEventListener("load", () => {
      window.pageYOffset > 100 ? setScrolled(true) : setScrolled(false);
    });
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100 ? setScrolled(true) : setScrolled(false);
    });
  }, []);
  return (
    <Wrapper scrolled={scrolled}>
      {router.pathname !== "/" && (
        <BackButton onClick={handleBack}>Back</BackButton>
      )}
      <HomeDarkContainer>
        <Link href="/" passHref>
          <HomeLink>Home</HomeLink>
        </Link>
        <DarkModeToggle
          onChange={() => music.toggleTheme()}
          checked={music.themeMode === "dark"}
          size={50}
          className="toggler"
          speed={2}
        />
      </HomeDarkContainer>
    </Wrapper>
  );
};

export default Navbar;
