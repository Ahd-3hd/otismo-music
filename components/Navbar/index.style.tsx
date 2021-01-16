import styled, { css } from "styled-components";
import Link from "next/link";
import { Page } from "../../types";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0;
  position: relative;
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

const MenuContainer = styled.ul<{ toggle: boolean; pagesLength: number }>`
  margin: 0;
  padding: 0;
  list-style-type: none;
  position: absolute;
  top: 80%;
  right: 0rem;
  text-align: right;
  opacity: ${({ toggle }) => (toggle ? 1 : 0)};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  display: flex;
  > li:nth-child(1) {
    margin-right: ${({ toggle }) => (toggle ? "1rem" : "0")};
    transition: margin-right 0.3s ease;
    transition-delay: 0.3s;
  }
  > li:nth-child(2) {
    margin-right: ${({ toggle }) => (toggle ? "1.5rem" : "0")};
    transition: margin-right 0.3s ease;
    transition-delay: 0.3s;
  }
  > li:nth-child(3) {
    margin-right: ${({ toggle }) => (toggle ? "2rem" : "0")};
    transition: margin-right 0.3s ease;
    transition-delay: 0.3s;
  }
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
