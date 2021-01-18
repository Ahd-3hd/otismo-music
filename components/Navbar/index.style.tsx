import styled from "styled-components";

export const Wrapper = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  z-index: 999;
  width: 100%;
  display: flex;
  top: 0;
  left: 0;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: ${({ scrolled }) => (scrolled ? "#fff" : "transparent")};
  transition: all 0.4s ease-in-out;
  box-shadow: ${({ scrolled }) =>
    scrolled
      ? "0px 3px 4px rgba(0, 0, 0, 0.1)"
      : "0px 3px 4px rgba(0, 0, 0, 0)"};
  > button,
  a {
    color: ${({ theme: { colors }, scrolled }) =>
      scrolled ? "#333333" : colors.white};
  }
`;

export const BackButton = styled.button`
  font-family: inherit;
  background: transparent;
  font-weight: 800;
  border: none;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  font-size: 1.3rem;
`;

export const HomeLink = styled.a`
  font-family: inherit;
  background: transparent;
  font-weight: 800;
  border: none;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  font-size: 1.3rem;
`;
