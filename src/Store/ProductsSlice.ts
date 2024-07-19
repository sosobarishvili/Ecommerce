import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Root } from "../Types/Types";

type InitialState = {
  data: Root[],
  loading: boolean,
  error: null | string

}

const initialState: InitialState = {
  data: [],
  loading: false,
  error: null
}

export const fetchProducts = async () => {
  const response = await fetch('http://localhost:3000/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};


export const fetchProductsThunk = createAsyncThunk('products/fetchProducts', async () => {
  const products = await fetchProducts();
  return products;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
})

export default productsSlice.reducer;