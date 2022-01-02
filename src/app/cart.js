// import { createContext, useReducer } from "react";
import { products } from "./api";

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [
    ],
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload
            const productsList = [...products.combos, ...products.grills, ...products.protein, ...products.swallows, ...products.soups, ...products.meals, ...products.sides, ...products.drinks]
            // let productsList = []
            // products.map(product => productsList += [...product])
            const p = productsList.find((e) => e.id === id);
            if (p != null) {
                return [...state, {
                    id: p.id,
                    name: p.name,
                    image: p.image,
                    label: p.label,
                    price: p.price,
                    count: 0,
                }]
            } else { return state }
        },
        removeFromCart: (state, action) => {
            const id = action.payload
            const j = state.findIndex((e) => e.id === id);
            if (j != null) {
                state.splice(j, 1)
                return state
            } else { return state }
        },
        removeFromCartCount: (state, action) => {
            const id = action.payload
            const j = state.findIndex((e) => e.id === id);
            if (j != null && state[j].count > 0) {
                state[j].count -= 1
                return state
            } else { return state }
        },
        addToCartCount: (state, action) => {
            const i = action.payload
            const j = state.findIndex((e) => e.id === i);
            if (j != null) {
                state[j].count += 1
                return state
            } else { return state }
        },
        reset: (state) => {
            state = []
            return state
        }
    }
})

export const cartItems = state => state.cart
export const { addToCart, addToCartCount, removeFromCartCount, removeFromCart, reset } = cartSlice.actions
export default cartSlice.reducer