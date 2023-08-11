import React from "react";
import styles from "./App.module.scss";
import {
  PlaylistsProvider,
  usePlaylistsContext,
} from "./__providers__/PlaylistsProvider.tsx";
import logo from "./assets/Spotify-Black.svg";
import { PlaylistsSidebar } from "./components/PlaylistsSidebar.tsx";

export const App = () => {
  const {
    states: { loading },
  } = usePlaylistsContext();

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PlaylistsProvider>
          <div className={styles.container}>
            <header className={styles.header}>
              <img src={logo} className={styles.logo} alt="logo" />

              <PlaylistsSidebar />
            </header>
          </div>
        </PlaylistsProvider>
      )}
    </>
  );
};
