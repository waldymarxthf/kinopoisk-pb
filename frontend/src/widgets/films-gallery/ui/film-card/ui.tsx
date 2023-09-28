import { Button, Card, Group, Image, Rating, Text } from "@mantine/core";
import LikeFilm from "~features/like-film";
import { FilmsProps } from "~shared/api/films/models";

export function FilmCard({ poster, name, description, rating, id }: FilmsProps) {
  return (
    <>
      <Card m="10px" w="296px" shadow="sm" radius="md" withBorder>
        <Card.Section>
          <Image src={poster.url} height={190} alt={name} w="300px" withPlaceholder />
        </Card.Section>

        <Text mt="xs" lineClamp={1} weight={500}>
          {name}
        </Text>

        <Text w="260px" lineClamp={3} size="sm" color="dimmed">
          {description}
        </Text>

        <Group w="300px" grow>
          <Text mt="5px" weight={500}>
            Рейтинг
          </Text>
          <Rating mt="5px" fractions={2} value={rating.kp / 2} readOnly />
        </Group>
        <Group>
          <Button
            component="a"
            href={`film/${id}`}
            variant="light"
            w={200}
            color="blue"
            mt="10px"
            radius="md"
          >
            Смотреть
          </Button>
          <LikeFilm id={id} />
        </Group>
      </Card>
    </>
  );
}
