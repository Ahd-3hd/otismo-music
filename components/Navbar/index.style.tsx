import styled, { css, keyframes } from "styled-components";
import Link from "next/link";
import { Page } from "../../types";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 1rem;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

export const MenuButton = styled.button<{ toggle: boolean }>`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  > svg {
    height: 1.3rem;
    fill: ${({ theme: { colors } }) => colors.white};
    > path {
      transition: transform 0.3s ease-in-out;
    }
  }
  ${({ toggle }) =>
    toggle &&
    css`
      > svg {
        path:nth-child(1) {
          transform: translateX(-40%);
        }
        path:nth-child(3) {
          transform: translateX(40%);
        }
      }
    `}
`;

const animateMenu = keyframes`
  from {
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

const MenuContainer = styled.ul<{ toggle: boolean; pagesLength: number }>`
  margin: 0;
  padding: 0;
  list-style-type: none;
  position: absolute;
  top: 80%;
  right: 0rem;
  text-align: right;
  display: ${({ toggle }) => (toggle ? "flex" : "none")};
  height: ${({ toggle }) => (toggle ? "auto" : "0")};
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  transition-delay: 1s;
  width: 100%;
  justify-content: space-evenly;
  animation: ${({ toggle }) => (toggle ? animateMenu : "")} 1s ease-in-out
    forwards;
`;
const MenuItem = styled.li``;
const MenuLink = styled.a`
  color: ${({ theme: { colors } }) => colors.white};
`;

export const Menu = ({ pages, toggle }: { toggle: boolean; pages: Page[] }) => {
  return (
    <MenuContainer toggle={toggle} pagesLength={pages.length}>
      {pages.map((item: Page) => {
        return (
          <MenuItem key={item.title}>
            <Link href={item.href} passHref>
              <MenuLink>{item.title}</MenuLink>
            </Link>
          </MenuItem>
        );
      })}
    </MenuContainer>
  );
};
