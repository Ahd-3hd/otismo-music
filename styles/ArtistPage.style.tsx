import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 3rem 0;
  margin-bottom: 7rem;
`;

export const ArtistName = styled.h1`
  color: ${({ theme: { colors } }) => colors.textPrimary};
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.textPrimary};
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
`;

export const AlbumsContainer = styled.div`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 250px;
  grid-gap: 2rem;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const AlbumCard = styled.a<{ img: string; albumName: string }>`
  display: block;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  ::after {
    content: "${({ albumName }) => albumName}";
    background: linear-gradient(
      180deg,
      ${({ theme: { colors } }) => `${colors.gradientOne}00`} 0%,
      ${({ theme: { colors } }) => `${colors.gradientTwo}55`} 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2rem;
    z-index: 2;
    color: ${({ theme: { colors } }) => colors.textPrimary};
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 500;
    font-size: 1.3rem;
  }
`;

export const MusicContainer = styled.div``;
