import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { PlaylistsContext } from "./__providers__/PlaylistsContext";
import logo from "./assets/Spotify-Black.svg";
import { PlaylistsSidebar } from "./components/PlaylistsSidebar";
import { getAllPlaylists } from "./services/getAllPlaylists";
import { Song } from "./services/interfaces";
import { PlaylistsProvider, usePlaylistsContext } from "../__providers__/PlaylistsProvider";

export const App = () => {
  return (
    <PlaylistsProvider>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />

          <PlaylistsSidebar />
        </header>
      </div>
    </PlaylistsProvider>
  );
};
