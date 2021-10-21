//Action Creators

export const selectSong = (song) => {
  //Return an acton
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
