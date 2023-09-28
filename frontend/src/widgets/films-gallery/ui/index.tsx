import { Grid } from "@mantine/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FilmCard from "./film-card";
import FilmSkeletonCards from "./film-skeleton-cards";
import usePocketBase from "~shared/lib/hooks/pb-hook";
import { RootState, useAppDispatch } from "~app/store/store";
import { fetchFavoriteFilm, fetchFilms } from "../model/api";

export function FilmGallery() {
  const { pb } = usePocketBase();
  const sort = useSelector((state: RootState) => state.filter.sort);
  const page = useSelector((state: RootState) => state.filter.page);
  const films = useSelector((state: RootState) => state.filmsData.films);
  const isLoading = useSelector((state: RootState) => state.filmsData.isLoading);
  const genres = useSelector((state: RootState) => state.filter.genres);
  const year = useSelector((state: RootState) => state.filter.year);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilms({ sort, page, year, genres }));
    dispatch(fetchFavoriteFilm({ pb }));
  }, [sort, page, dispatch, pb, year, genres]);

  return (
    <>
      {isLoading ? (
        <FilmSkeletonCards count={10} />
      ) : (
        <Grid>
          {films.map((item, index) => (
            <FilmCard key={index} {...item} />
          ))}
        </Grid>
      )}
    </>
  );
}
