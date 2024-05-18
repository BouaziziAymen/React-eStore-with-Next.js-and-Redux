import { combineReducers } from "redux"
import { productsReducer } from "./product/product.slice"
import { userReducer } from "./user/user.slice"
import { cartReducer } from "./cart/cart.slice"
export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
})
