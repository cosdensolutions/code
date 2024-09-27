import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { postsApiSlice } from "./posts/postsApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postsApiSlice.reducerPath]: postsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postsApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
