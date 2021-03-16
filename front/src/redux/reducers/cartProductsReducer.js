import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setCartProducts = createAction("SETCARTPRODUCTS");

export const addToCartProducts = createAsyncThunk(
  "ADDTOCART",
  (productId) => {
    return axios
      .post(`/api/cart/${productId}`) ///SEGUIRLO
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
);

export const getCartProducts = createAsyncThunk("GET_CART_PRODUCTS", () => {
  return axios
    .get("/api/cart")
    .then((res) => res.data.product)
    .catch((err) => console.log(err));
});

export const cartProductsReducer = createReducer([], {
  [getCartProducts.fulfilled]: (state, action) => action.payload,
});

export const addToCartProductsReducer = createReducer([], {
  [addToCartProducts.fulfilled]: (state, action) => action.payload,
});
