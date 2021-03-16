import { configureStore } from "@reduxjs/toolkit";

import { logger } from "redux-logger";

import { userReducer } from "./reducers/userReducer";
import {
  productReducer,
  productsReducer,
  productsNameReducer,
} from "./reducers/productReducer";
import {
  adminUserReducer,
  allAdminUserReducer,
  getAllAdminProductsReducer,
  singleAdminProductReducer,
} from "./reducers/adminReducer";
import {
  cartProductsReducer,
  addToCartProductsReducer,
} from "./reducers/cartProductsReducer";
import {
  categoriesReducer,
  singleCategoryReducer,
} from "./reducers/categoryReducer";
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  reducer: {
    singleUser: userReducer,
    singleProduct: productReducer,
    products: productsReducer,
    allAdminsUser: allAdminUserReducer,
    singleAdminUser: adminUserReducer,
    allAdminProducts: getAllAdminProductsReducer,
    singleAdminProduct: singleAdminProductReducer,
    cartProducts: cartProductsReducer,
    allCategories: categoriesReducer,
    singleCategory: singleCategoryReducer,
    productName: productsNameReducer,
    addToCartProducts: addToCartProductsReducer,
  },
});

export default store;
