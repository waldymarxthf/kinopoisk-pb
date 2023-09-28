import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilmByQuery } from "~shared/api/films/films";
import { SearchBoxItemProps } from "../ui";

export const fetchFilmsByQuery = createAsyncThunk(
  "films/getFilmByQuery",
  async (params: { debouncedValue: string }) => {
    const response = await getFilmByQuery(params.debouncedValue);
    return response.docs.map((item: SearchBoxItemProps) => ({
      value: item.name,
      alternativeName: item.alternativeName,
      poster: item.poster,
      rating: item.rating,
      year: item.year,
      id: item.id,
    }));
  },
);
