import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../../types/AddedProductTypes";

interface CartState {
    cart: Product[];
}

const getCartFromLocalStorage = (): Product[] => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data).cart ?? [] : [];
};

const initialState: CartState = {
    cart: getCartFromLocalStorage()
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
        addToCart: (state, action: PayloadAction<Product>) => {
            const item = state.cart.find(
                p => p.id === action.payload.id && p.variant.variantId === action.payload.variant.variantId
            );

            if (item) {
                if (item.variant.stock > 0) {
                    item.variant.quantity += 1;
                    item.variant.stock -= 1;
                }
            } else {
                const newItem = {
                    ...action.payload,
                    variant: {
                        ...action.payload.variant,
                        stock: Math.max(0, action.payload.variant.stock - 1)
                    }
                };
                state.cart.push(newItem);
            }
        },
        decreaseProduct: (state, action: PayloadAction<Product>) => {
            state.cart = state.cart.map(item => {
                if(item.id === action.payload.id && item.variant.variantId === action.payload.variant.variantId) {
                    if(item.variant.quantity > 1) {
                        return {
                            ...item,
                            variant: {
                                ...item.variant,
                                quantity: item.variant.quantity - 1,
                                stock: item.variant.stock + 1
                            }
                        };
                    }
                        return item;
                }
                    return item
            })
        },
        removeFromCart : (state, action: PayloadAction<Product>) =>{
            state.cart = state.cart.filter(item => !(item.id === action.payload.id  && item.variant.variantId === action.payload.variant.variantId))
        },
        resetCart : (state) => {
            state.cart = []
        }
    }
})

export const {addToCart, removeFromCart, resetCart, decreaseProduct} = cartSlice.actions

export default cartSlice.reducer