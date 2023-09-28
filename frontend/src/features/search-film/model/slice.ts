import { createSlice } from "@reduxjs/toolkit";
import { fetchFilmsByQuery } from "./api";
import { SearchBoxItemProps } from "../ui";

interface FilmQueryState {
  filmsByQuery: SearchBoxItemProps[];
  isLoading: boolean;
}

const filmsByQuerySlice = createSlice({
  name: "filmsData",
  initialState: {
    filmsByQuery: [],
    isLoading: false,
  } as FilmQueryState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilmsByQuery.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilmsByQuery.rejected, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilmsByQuery.fulfilled, (state, action) => {
      state.filmsByQuery = action.payload;
      state.isLoading = false;
    });
  },
});

export const filmsByQueryReducer = filmsByQuerySlice.reducer;
