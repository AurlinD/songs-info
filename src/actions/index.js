export const selectSong = song => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};

//create a named export to export many diff functions from a file
