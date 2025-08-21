import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from '../../../data/data.json'
import type { DataTypes } from "../../../types/DataTypes";

interface SliceProps {
    products: DataTypes[];
    loading: boolean;
    error: null | string;
    keyword: string;
    sortType: string | null;
}

export const fetchProducts = createAsyncThunk<DataTypes[]>(
  'products/fetchProducts',
  async () => {
    return data;
  }
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [...data],
        loading: false,
        error: null,
        keyword: "",
        sortType: null,
    } as SliceProps,
    reducers: {
        setKeyword: (state, action) => {
            state.keyword = action.payload
        },
        setSortType: (state, action) => {
            state.sortType = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Ürünler Yüklenemedi";
            })
    }
})

export const { setKeyword, setSortType } = productSlice.actions;
export default productSlice.reducer;