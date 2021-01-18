import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Wrapper, BackButton, HomeLink } from "./index.style";
import Link from "next/link";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

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
  if (router.pathname !== "/") {
    return (
      <Wrapper scrolled={scrolled}>
        <BackButton onClick={handleBack}>Back</BackButton>
        <Link href="/" passHref>
          <HomeLink>Home</HomeLink>
        </Link>
      </Wrapper>
    );
  }
  return null;
};

export default Navbar;
