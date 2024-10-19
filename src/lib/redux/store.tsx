import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

import usersSlice, { setCurrentUser } from "./reducers/userSlice"

// Configure Redux store

const rootReducer = combineReducers({
  users: usersSlice
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false // Allow non-serializable actions, such as redux-persist actions
    })
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

if (typeof window !== "undefined") {
  const currentUser = sessionStorage.getItem("user")
  if (currentUser) {
    store.dispatch(setCurrentUser(JSON.parse(currentUser)))
  }
}

export default store
