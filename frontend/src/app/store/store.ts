import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filterReducer from "~features/navbar/model/slice";
import { filmsByQueryReducer } from "~features/search-film/model/slice";
import { filmsReducer } from "~widgets/films-gallery/model/slice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    filmsData: filmsReducer,
    filmsByQuery: filmsByQueryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
