import usePocketBase from "~shared/lib/hooks/pb-hook";
import { NavbarFilmsFilter } from "../../widgets/navbar-filters/ui";
import { FilmGallery } from "~widgets/films-gallery";
import { Title } from "@mantine/core";

export function Main() {
  const { user } = usePocketBase();

  if (!user) return <Title align="center">Для просмотра фильма необходимо авторизоваться</Title>;
  return (
    <>
      <NavbarFilmsFilter />
      <FilmGallery />
    </>
  );
}
