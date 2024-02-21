import { configureStore } from "@reduxjs/toolkit";
import movieDataReducer from "../features/movieData/movieDataSlice";

const store = configureStore({
  reducer: {
    movieData: movieDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
