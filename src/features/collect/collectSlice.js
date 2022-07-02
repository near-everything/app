import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  category: null,
  subcategory: null,
  attributes: {},
  media: [],
};

export const collectSlice = createSlice({
  name: "collect",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSubcategory: (state, action) => {
      state.subcategory = action.payload;
    },
    setAttributes: (state, action) => {
      state.attributes = action.payload;
    },
    setMedia: (state, action) => {
      state.media = action.payload;
    },
    resetCollect: () => initialState,
  },
});

export const {
  setCategory,
  setSubcategory,
  setAttributes,
  setMedia,
  resetCollect,
} = collectSlice.actions;

export default collectSlice.reducer;
