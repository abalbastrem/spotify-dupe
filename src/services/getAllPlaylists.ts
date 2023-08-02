import { PLAYLISTS } from "../MOCKS/playlists.ts";
import { Song } from "./interfaces";

export const getAllPlaylists = async (): Promise<Record<string, Song[]>> => {
  const playlists = await Promise.resolve(PLAYLISTS);

  return playlists;
};
