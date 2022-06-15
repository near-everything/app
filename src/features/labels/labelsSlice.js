import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

export const labelsSlice = createSlice({
  name: 'labels',
  initialState,
  reducers: {
    setLabels: (state, action) => {
      state.schema = action.payload;
    },
  },
});

export const { setLabels } = labelsSlice.actions;

export const selectLabels = (state) => state;

export default labelsSlice.reducer;
