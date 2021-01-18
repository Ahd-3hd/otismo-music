import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import {
  Wrapper,
  BackButton,
  HomeLink,
  HomeDarkContainer,
  ToggleTheme,
} from "./index.style";
import Link from "next/link";
import { MusicContext } from "../../context/MusicContext";

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
        <ToggleTheme
          themeMode={music.themeMode === "dark"}
          onClick={() => music.toggleTheme()}
        />
      </HomeDarkContainer>
    </Wrapper>
  );
};

export default Navbar;
