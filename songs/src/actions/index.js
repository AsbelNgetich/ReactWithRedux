//Action creator
export const selectSong = (song) => {
  //Return an action thats a javascript object
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
