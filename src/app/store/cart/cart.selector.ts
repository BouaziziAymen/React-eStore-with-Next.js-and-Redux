import { createSelector } from "reselect"
import type { RootState } from "../../store"
import type { CartState } from "./cart.type"

const selectCartReducer = (state: RootState): CartState => state.cart

export const selectCartProducts = createSelector(
  [selectCartReducer],
  cartSlice => cartSlice.cartProducts,
)

export const selectCartTotalPrice = createSelector(
  [selectCartProducts],
  (cartProducts): number =>
    cartProducts.reduce(
      (total, cartProduct) => total + cartProduct.quantity * cartProduct.price,
      0,
    ),
)

export const selectCartProductsCount = createSelector(
  [selectCartProducts],
  (cartProducts): number =>
    cartProducts.reduce(
      (total, cartProduct) => total + cartProduct.quantity,
      0,
    ),
)
