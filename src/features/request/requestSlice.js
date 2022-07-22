import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  referenceLink: "",
  description: null,
  media: [],
};

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    setReferenceLink: (state, action) => {
      state.referenceLink = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setMedia: (state, action) => {
      state.media = action.payload;
    },
    resetRequest: () => initialState,
  },
});

export const {
  setMedia,
  setReferenceLink,
  setDescription,
  resetRequest,
} = requestSlice.actions;

export default requestSlice.reducer;
