import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentIndex = action.payload.index;
      state.isActive = true;
    },
    nextSong: (state, action) => {
      state.currentIndex += 1;
    },
    prevSong: (state) => {
      state.currentIndex -= 1;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause } = playerSlice.actions;
export default playerSlice.reducer;
