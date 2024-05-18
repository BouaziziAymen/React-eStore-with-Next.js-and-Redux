import { createSelector } from "reselect"
import type { RootState } from "../../store"
import type { UserState } from "./user.type"

export const selectUserReducer = (state: RootState): UserState => state.user

export const selectCurrentUser = createSelector(
  selectUserReducer,
  userSlice => userSlice.currentUser,
)

export const selectCurrentLocale = createSelector(
  selectUserReducer,
  userSlice => userSlice.locale,
)
