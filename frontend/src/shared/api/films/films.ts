import { headers } from "../config";
import { ApiResponse } from "./models";

export async function getFilms(
  sort: string | null,
  pageNumber = 1,
  year: [number, number],
  genres: string,
): Promise<ApiResponse> {
  const url = `https://api.kinopoisk.dev/v1.3/movie?sortField=${sort}&sortField=year&sortType=-1&page=${pageNumber}&year=${year[0]}-${year[1]}&limit=10&poster.url=%21null&description=%21null&name=%21null${genres}`;
  try {
    const opts: RequestInit = {
      method: "GET",
      headers,
    };
    const response = await fetch(url, opts);
    return await response.json();
  } catch (error) {
    console.log(error);
    return { docs: [] };
  }
}

export async function getFilmById(id?: string) {
  const url = `https://api.kinopoisk.dev/v1.3/movie/${id}`;
  const opts: RequestInit = {
    method: "GET",
    headers,
  };
  try {
    const response = await fetch(url, opts);
    return await response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
}

export async function getFilmByQuery(query?: string) {
  const url = `https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&name=${query}`;
  const opts: RequestInit = {
    method: "GET",
    headers,
  };
  try {
    const response = await fetch(url, opts);
    return await response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
}
