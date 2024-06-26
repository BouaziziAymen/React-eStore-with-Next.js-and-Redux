import type { ThunkAction, Action } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./store/root.reducer"

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
