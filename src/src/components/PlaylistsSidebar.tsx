import { FC } from "react";
import "./PlaylistsSidebar.module.scss";

import { usePlaylistsContext } from "../__providers__/PlaylistsContext";
import { Song } from "../services/interfaces";

interface PlaylistsSidebarProps {}

export const PlaylistsSidebar: FC<PlaylistsSidebarProps> = () => {
  const { playlists } = usePlaylistsContext();
  const playlistsKeys = Object.keys(playlists);

  return (
    <div className="container">
      {playlistsKeys.map((key: string) => (
        <>
          {playlists[key].map((song: Song) => (
            <span key={song.id}>{song.name}</span>
          ))}
        </>
      ))}
    </div>
  );
};
