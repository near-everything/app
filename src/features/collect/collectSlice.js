import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  category: null,
  subcategory: null,
  attributes: [],
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
    setAttributeOptions: (state, action) => {
      state.attributes = state.attributes.map((attribute) =>
        attribute.value === action.payload.attributeId
          ? { ...attribute, options: action.payload }
          : attribute
      );
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
  setAttributeOptions,
  setMedia,
  setDetails,
  resetCollect,
} = collectSlice.actions;

export default collectSlice.reducer;
