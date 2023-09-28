import { Box, Button, Flex, Image, List, Table, Text, Title } from "@mantine/core";
import { useLoaderData } from "react-router";
import { convertMinutesToHours } from "~shared/lib/helpers/convert-time-to-string";
import dayjs from "dayjs";
import ReactPlayer from "react-player";
import { IconSquareRoundedArrowLeftFilled } from "@tabler/icons-react";

export type FilmProps = {
  film: FilmDetailsDataProps;
};

export type FilmDetailsDataProps = {
  poster: { url: string };
  name: string;
  year: number;
  description: string;
  persons: [{ profession: string; name: string }];
  countries: [{ name: string }];
  genres: [{ name: string }];
  budget: { value: number; currency: string };
  ageRating: number;
  movieLength: number;
  premiere: { world: string };
  videos: { trailers: [{ url: string; type: string }] };
};

//TODO: разделить по модулям

export function FilmDetails() {
  const { film } = useLoaderData() as FilmProps;
  return (
    <Flex>
      <Box>
        <Image radius="md" maw={275} src={film.poster.url} alt="Random unsplash image" />
        <Button
          component="a"
          href="/"
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          leftIcon={<IconSquareRoundedArrowLeftFilled />}
          mt="10px"
          w={275}
          radius="md"
        >
          Назад
        </Button>
      </Box>
      <Box ml={24} w={500}>
        <Title align="start">
          {film.name} ({film.year})
        </Title>
        <Title order={3}>Описание:</Title>
        <Text>{film.description}</Text>
        <Title mt={20} order={3}>
          Актеры:
        </Title>
        {film.persons.map(
          (item, index) =>
            item.profession === "актеры" && (
              <List key={index}>
                <List.Item>{item.name}</List.Item>
              </List>
            ),
        )}
        <Title mt={20} order={3}>
          Детали:
        </Title>
        <Table>
          <tbody>
            <tr key="Страна">
              <td>Страна</td>
              <td>{film.countries[0].name}</td>
            </tr>
            <tr key="Год">
              <td>Год</td>
              <td>{film.year}</td>
            </tr>
            <tr key="Жанр">
              <td>Жанр</td>
              <td>{film.genres.map((item) => item.name).join(", ")}</td>
            </tr>
            <tr key="Режиссер">
              <td>Режиссер</td>
              <td>
                {film.persons
                  .filter((item) => item.profession === "режиссеры")
                  .map((item) => item.name)
                  .join(", ")}
              </td>
            </tr>
            <tr key="Бюджет">
              <td>Бюджет</td>
              <td>
                {film.budget.value} {film.budget.currency}
              </td>
            </tr>
            <tr key="Возраст">
              <td>Возрастное ограничение</td>
              <td>{film.ageRating}+</td>
            </tr>
            <tr key="Время">
              <td>Время</td>
              <td>{convertMinutesToHours(film.movieLength)}</td>
            </tr>
            <tr key="Премьера">
              <td>Дата премьеры</td>
              <td>{dayjs(film.premiere.world).format("DD/MM/YYYY")}</td>
            </tr>
          </tbody>
        </Table>
      </Box>
      <Flex justify="center" w="60rem">
        <ReactPlayer
          url={film.videos.trailers
            .filter((item) => item.type === "TRAILER")
            .map((item) => item.url)}
        />
      </Flex>
    </Flex>
  );
}
