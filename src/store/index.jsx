import { configureStore } from "@reduxjs/toolkit"
import products from './slices/products.slice'
import isLoading from './slices/isLoading.slice'
import cartSlice from "./slices/cart.slice"

export default configureStore({
  reducer: {
    products,
    isLoading, 
    cartSlice
  }
})