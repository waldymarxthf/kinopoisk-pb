import { createSlice } from "@reduxjs/toolkit";
import { RecordModel } from "pocketbase";
import { fetchFavoriteFilm, fetchFilms } from "./api";
import { FilmsProps } from "~shared/api/films/models";

interface FilmState {
  films: FilmsProps[];
  favoriteFilms: RecordModel[];
  isLoading: boolean;
}

const filmsSlice = createSlice({
  name: "filmsData",
  initialState: {
    films: [],
    favoriteFilms: [],
    isLoading: false,
  } as FilmState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilms.rejected, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload.docs;
      state.isLoading = false;
    });
    builder.addCase(fetchFavoriteFilm.fulfilled, (state, action) => {
      state.favoriteFilms = action.payload.items;
    });
  },
});

export const filmsReducer = filmsSlice.reducer;
