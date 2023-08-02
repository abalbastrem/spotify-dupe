import { createContext, useContext } from "react";
import { Song } from "../services/interfaces";

interface PlaylistsContent {
  playlists: Record<string, Song[]>;
}

export const PlaylistsContext = createContext<PlaylistsContent>({
  playlists: {},
});

export const usePlaylistsContext = () => useContext(PlaylistsContext);
