import { Grid, Skeleton } from "@mantine/core";

export const FilmSkeletonCards = ({ count }: { count: number }) => (
  <Grid>
    {Array.from({ length: count }).map((_, index) => (
      <Skeleton key={index} m="10px" radius="md" height={380} width={296} />
    ))}
  </Grid>
);
