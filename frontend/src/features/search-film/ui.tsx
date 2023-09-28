import {
  Autocomplete,
  Box,
  Flex,
  Group,
  Image,
  SelectItemProps,
  Skeleton,
  Text,
} from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { RootState, useAppDispatch } from "~app/store/store";
import { fetchFilmsByQuery } from "./model/api";
import { useSelector } from "react-redux";
import { IconSearch } from "@tabler/icons-react";

export function SearchFilm() {
  const [value, setValue] = useState("");
  const [debouncedValue] = useDebouncedValue(value, 1000);
  const navigate = useNavigate();
  const filmsByQuery = useSelector((state: RootState) => state.filmsByQuery.filmsByQuery);
  const isLoading = useSelector((state: RootState) => state.filmsByQuery.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmsByQuery({ debouncedValue }));
  }, [debouncedValue, dispatch]);

  return (
    <Autocomplete
      radius={16}
      w={300}
      aria-label="search film"
      placeholder="Фильмы, сериалы"
      onChange={setValue}
      value={value}
      data={filmsByQuery}
      itemComponent={SearchBoxItem}
      limit={10}
      nothingFound="not found"
      filter={Boolean}
      disabled={isLoading}
      icon={<IconSearch size="0.9rem" />}
      onItemSubmit={(item) => navigate(`film/${item.id}`)}
    />
  );
}

export interface SearchBoxItemProps extends SelectItemProps {
  value: string;
  name: string;
  year: number;
  rating: { kp: number };
  alternativeName: string;
  poster: { previewUrl: string };
}

export const SearchBoxItem = forwardRef<HTMLDivElement, SearchBoxItemProps>(
  ({ year, id, rating, alternativeName, poster, value, ...props }, ref) => {
    const isLoading = useSelector((state: RootState) => state.filmsByQuery.isLoading);

    return (
      <>
        {isLoading ? (
          <Skeleton key={id} height={50} radius="md" mb={10} />
        ) : (
          <Flex key={id} ref={ref} {...props} gap="sm">
            <Image src={poster?.previewUrl} maw={40} />
            <Box maw={300}>
              <Text fw={700}>{value}</Text>
              <Group spacing="5px">
                <Text fw={700} color="green">
                  {rating?.kp}
                </Text>
                {alternativeName && (
                  <Text lineClamp={1} w={130} fz={12}>
                    {alternativeName}
                  </Text>
                )}
                <Text fz={12}>{year}</Text>
              </Group>
            </Box>
          </Flex>
        )}
      </>
    );
  },
);
