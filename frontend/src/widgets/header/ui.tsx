import { Burger, Button, Group, Header, MediaQuery, Text, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "~shared/ui/theme-toggle";
import usePocketBase from "~shared/lib/hooks/pb-hook";
import AccountMenu from "~features/account-menu";
import SearchFilm from "~features/search-film";
import { RootState } from "~app/store/store";
import { toggleBurger } from "~features/navbar/model/slice";

export function HeaderFilms() {
  const theme = useMantineTheme();
  const { pb } = usePocketBase();
  const dispatch = useDispatch();
  const openedBurger = useSelector((state: RootState) => state.filter.openedBurger);
  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={openedBurger}
            onClick={() => dispatch(toggleBurger(!openedBurger))}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text component="a" href="/" fz={34} fw={700}>
          Фильмы
        </Text>
        <Group>
          {pb.authStore.isValid && <SearchFilm />}
          <ThemeToggle />
          {pb.authStore.isValid ? (
            <AccountMenu />
          ) : (
            <Button component="a" href="/login">
              Войти
            </Button>
          )}
        </Group>
      </div>
    </Header>
  );
}
