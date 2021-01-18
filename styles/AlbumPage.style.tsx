import styled from "styled-components";
import PlayIcon from "../svg/PlayIcon.svg";
import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 1rem;
  margin: 2rem 0;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    max-width: 600px;
    margin: 2rem auto;
  }
`;
export const AlbumHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin: 2rem 0;
  }
`;
export const AlbumCover = styled.div<{ img: string }>`
  height: 200px;
  width: 200px;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.08);
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    margin-right: 3rem;
  }
`;
export const NamesContainer = styled.div`
  text-align: center;
  margin: 1rem 0;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    margin: 0;
    text-align: left;
  }
`;
export const AlbumName = styled.p`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.textPrimary};
  font-weight: 600;
  font-size: 1.5rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    font-size: 2rem;
  }
`;
export const ArtistName = styled.p`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.textPrimary};
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
`;

export const SongsContainer = styled.div``;
const MusicBar = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.3rem;
  border-bottom: 1.5px solid ${({ theme: { colors } }) => colors.textPrimary};
`;
const PlayButton = styled.button`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  > svg {
    fill: ${({ theme: { colors } }) => colors.textPrimary};
    height: 1.5rem;
  }
`;
const SongName = styled.p`
  color: ${({ theme: { colors } }) => colors.textPrimary};
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  flex: 3;
`;
const License = styled.p`
  color: ${({ theme: { colors } }) => colors.textPrimary};
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  flex: 1;
`;
const Duration = styled.p`
  flex: 1;
  color: ${({ theme: { colors } }) => colors.textPrimary};
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  font-weight: 600;
`;

export const Song = ({
  songName,
  licenseUrl,
  duration,
  mp3Url,
  albumImg,
  artistName,
}) => {
  const music = useContext(MusicContext);
  const getLicense = (url) => {
    const output = url.split("by")[1].split("/")[0];
    return output ? output.toUpperCase() : "";
  };

  const getDuration = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds}`;
  };
  getDuration(10);
  return (
    <MusicBar>
      <PlayButton
        onClick={() =>
          music.setMusicPlayer((prevState) => ({
            ...prevState,
            song: [
              {
                name: songName,
                musicSrc: mp3Url,
                cover: albumImg,
                singer: artistName,
                duration,
              },
            ],
            play: true,
          }))
        }
      >
        <PlayIcon />
      </PlayButton>
      <SongName>{songName}</SongName>
      <License>BY{getLicense(licenseUrl)}</License>
      <Duration>{getDuration(duration)}</Duration>
    </MusicBar>
  );
};
