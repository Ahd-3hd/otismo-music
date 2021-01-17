import styled from "styled-components";
import PlayIcon from "../svg/PlayIcon.svg";
import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 1rem;
  margin: 2rem 0;
`;
export const AlbumHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AlbumCover = styled.div<{ img: string }>`
  height: 200px;
  width: 200px;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
`;
export const NamesContainer = styled.div`
  text-align: center;
  margin: 1rem 0;
`;
export const AlbumName = styled.p`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  font-size: 1.5rem;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
`;
export const ArtistName = styled.p`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.white};
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
  border-bottom: 1.5px solid ${({ theme: { colors } }) => colors.white};
`;
const PlayButton = styled.button`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  > svg {
    fill: ${({ theme: { colors } }) => colors.white};
    height: 1.5rem;
  }
`;
const SongName = styled.p`
  color: ${({ theme: { colors } }) => colors.white};
  text-decoration: 0 0 2px rgba(0, 0, 0, 0.2);
  flex: 3;
`;
const License = styled.p`
  color: ${({ theme: { colors } }) => colors.white};
  text-decoration: 0 0 2px rgba(0, 0, 0, 0.2);
  flex: 1;
`;
const Duration = styled.p`
  flex: 1;
  color: ${({ theme: { colors } }) => colors.white};
  text-decoration: 0 0 2px rgba(0, 0, 0, 0.2);
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
            url: [
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