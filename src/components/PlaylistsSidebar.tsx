import { FC } from "react";
import "./PlaylistsSidebar.module.scss";

import { usePlaylistsContext } from "../__providers__/PlaylistsProvider";
import { Song } from "../services/interfaces.ts";

interface PlaylistsSidebarProps {}

export const PlaylistsSidebar: FC<PlaylistsSidebarProps> = () => {
  const {
    states: { playlists },
  } = usePlaylistsContext();
  const playlistsArray = Object.values(playlists).flat();

  return (
    <div className="container">
      {playlistsArray.map((song: Song) => (
        <span key={song.name}>{song.name}</span>
      ))}
    </div>
  );
};
