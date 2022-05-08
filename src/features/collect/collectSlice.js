import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount, insertItem, storeImages } from "./collectAPI";

const initialState = {
  status: "idle",
  category: null,
  subcategory: null,
  brand: "",
  condition: "",
  material: "",
  size: "",
  description: "",
  quantity: 1,
  media: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const insert = createAsyncThunk(
  "collect/insert",
  async (item, user) => {
    // const urls = await storeImages(media, user);
    const response = await insertItem(item, user);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

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
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setCondition: (state, action) => {
      state.condition = action.payload;
    },
    setMaterial: (state, action) => {
      state.material = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setMedia: (state, action) => {
      state.media = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(insert.pending, (state) => {
        state.status = "loading";
      })
      .addCase(insert.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export const { setCategory, setSubcategory, setBrand, setCondition, setMaterial, setSize, setDescription, setQuantity, setMedia } = collectSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  // if (currentValue % 2 === 1) {
  //   dispatch(incrementByAmount(amount));
  // }
};

export default collectSlice.reducer;
