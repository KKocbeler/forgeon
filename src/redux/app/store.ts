import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './../features/cart/cartSlice'
import productSlice from "../features/product/productSlice"
import userSlice from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
        user: userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch