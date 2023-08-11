import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getAllPlaylists } from "../services/getAllPlaylists.ts";
import { Song } from "../services/interfaces.ts";

interface PlaylistsContent {
  states: {
    playlists: Record<string, Song[]>;
    setPlaylists: (playlists: Record<string, Song[]>) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
  };
}

const PlaylistsContext = createContext<PlaylistsContent>({
  states: {
    playlists: {},
    setPlaylists: () => {},
    loading: false,
    setLoading: () => {},
  },
});

export const PlaylistsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
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

  const value = {
    states: {
      playlists,
      setPlaylists,
      loading,
      setLoading,
    },
  };

  return (
    <PlaylistsContext.Provider value={value}>
      {children}
    </PlaylistsContext.Provider>
  );
};

export const usePlaylistsContext = () => useContext(PlaylistsContext);
