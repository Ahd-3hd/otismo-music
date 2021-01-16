import styled, { css } from "styled-components";
import Link from "next/link";
import { Page } from "../../types";

export const Wrapper = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  z-index: 999;
  width: 100%;
  display: flex;
  top: 0;
  left: 0;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background: ${({ theme: { colors }, scrolled }) =>
    scrolled ? colors.white : "transparent"};
  transition: 0.3s ease-out;
  box-shadow: ${({ scrolled }) =>
    scrolled ? "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;" : "none"};
`;

export const MenuButton = styled.button<{ toggle: boolean; scrolled: boolean }>`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  > svg {
    height: 1.3rem;
    fill: ${({ theme: { colors }, scrolled }) =>
      scrolled ? colors.primary : colors.white};
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  display: ${({ toggle }) => (toggle ? "flex" : "none")};
  overflow: hidden;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    justify-content: space-evenly;
  }
`;
const MenuItem = styled.li``;
const MenuLink = styled.a<{ scrolled: boolean }>`
  color: ${({ theme: { colors }, scrolled }) =>
    scrolled ? colors.primary : colors.white};
  font-weight: 500;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
`;

export const Menu = ({
  pages,
  toggle,
  scrolled,
}: {
  toggle: boolean;
  pages: Page[];
  scrolled: boolean;
}) => {
  return (
    <MenuContainer toggle={toggle} pagesLength={pages.length}>
      {pages.map((item: Page) => {
        return (
          <MenuItem key={item.title}>
            <Link href={item.href} passHref>
              <MenuLink scrolled={scrolled}>{item.title}</MenuLink>
            </Link>
          </MenuItem>
        );
      })}
    </MenuContainer>
  );
};
