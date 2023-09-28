import { createSlice } from "@reduxjs/toolkit";
import { convertLocalTimeToYear } from "~shared/lib/helpers/convert-now-date-to-year";

const initialState = {
  sort: "votes.kp",
  page: 1,
  openedBurger: false,
  year: [1890, convertLocalTimeToYear(new Date())] as [number, number],
  genres: "&genres.name=%21null",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectSort: (state, action) => {
      state.sort = action.payload;
      state.page = 1;
    },
    selectPage: (state, action) => {
      state.page = action.payload;
    },
    toggleBurger: (state, action) => {
      state.openedBurger = action.payload;
    },
    selectYear: (state, action) => {
      state.year = action.payload;
    },
    selectGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { selectSort, selectPage, toggleBurger, selectYear, selectGenres } =
  filterSlice.actions;

export default filterSlice.reducer;
