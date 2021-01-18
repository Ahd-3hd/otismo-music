import { ThemeProvider } from "styled-components";
import { useState } from "react";
import "../styles/globals.css";
import theme from "../utils/theme";
import darkTheme from "../utils/darkTheme";
import Layout from "../components/Layout";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { MusicContext } from "../context/MusicContext";

function MyApp({ Component, pageProps }) {
  const [musicPlayer, setMusicPlayer] = useState({
    song: [],
    play: false,
  });

  const customDownloader = async (downloadInfo) => {
    const link = document.createElement("a");
    link.href = downloadInfo.src;
    link.download = downloadInfo.filename || "test";
    link.setAttribute("download", downloadInfo.filename || "test");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <MusicContext.Provider
      value={{
        ...musicPlayer,
        setMusicPlayer,
      }}
    >
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          {musicPlayer.play && (
            <ReactJkMusicPlayer
              customDownloader={customDownloader}
              quietUpdate
              clearPriorAudioLists
              audioLists={musicPlayer.song}
              mode="full"
            />
          )}
        </Layout>
      </ThemeProvider>
    </MusicContext.Provider>
  );
}

export default MyApp;
