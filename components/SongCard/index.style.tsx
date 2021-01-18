import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  :hover {
    .details {
      opacity: 1;
    }
  }
  /* box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px; */
`;

export const CardImg = styled.div<{ img: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const CardDetails = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #292c4b 100%); */
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0.6rem;
  opacity: 0;
  transition: opacity 0.2s ease-out;
`;

export const SongName = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  /* color: ${({ theme: { colors } }) => colors.text}; */
  font-weight: 600;
  margin: 0.5rem 0;
  cursor: pointer;
  padding: 0;
`;
export const AlbumName = styled.a`
  font-size: 1rem;
  /* color: ${({ theme: { colors } }) => colors.text}; */
  font-weight: 600;
  margin: 0.5rem 0;
`;

export const ArtistName = styled.a`
  font-size: 1rem;
  /* color: ${({ theme: { colors } }) => colors.text}; */
  font-weight: 600;
  margin: 0.5rem 0;
`;

export const License = styled.a`
  /* color: ${({ theme: { colors } }) => colors.text}; */
  font-size: 0.7rem;
`;

export const Play = styled.button`
  margin: 1rem 0;
  background: transparent;
  border: none;
  cursor: pointer;
  > svg {
    height: 2rem;
    /* fill: ${({ theme: { colors } }) => colors.text}; */
  }
`;
