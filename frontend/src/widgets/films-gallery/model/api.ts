import PocketBase from "pocketbase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilms } from "~shared/api/films/films";

export const fetchFilms = createAsyncThunk(
  "films/getFilms",
  async (params: { sort: string; page: number; year: [number, number]; genres: string }) => {
    const response = await getFilms(params.sort, params.page, params.year, params.genres);
    return response;
  },
);

export const fetchFavoriteFilm = createAsyncThunk(
  "favoriteFilms/getFavoriteMovieList",
  async (params: { pb: PocketBase }) => {
    const response = await params.pb.collection("favoriteMovies").getList(1, 30);
    return response;
  },
);
