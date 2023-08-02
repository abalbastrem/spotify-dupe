import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { PlaylistsContext } from "./__providers__/PlaylistsContext";
import logo from "./assets/Spotify-Black.svg";
import { PlaylistsSidebar } from "./components/PlaylistsSidebar";
import { getAllPlaylists } from "./services/getAllPlaylists";
import { Song } from "./services/interfaces";

export const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [playlists, setPlaylists] = useState<Record<string, Song[]>>({});

  useEffect(() => {
    setLoading(true);

    getAllPlaylists()
      .then((playlists: Record<string, Song[]>) => {
        setPlaylists(playlists);
      })
      .catch((e: Error) => {
        console.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PlaylistsContext.Provider value={{ playlists }}>
          <div className={styles.container}>
            <header className={styles.header}>
              <img src={logo} className={styles.logo} alt="logo" />

              <PlaylistsSidebar />
            </header>
          </div>
        </PlaylistsContext.Provider>
      )}
    </>
  );
};
