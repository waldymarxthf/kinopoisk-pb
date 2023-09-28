import { Navbar, Title } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "~app/store/store";

export function NavbarFilters({ children }: { children: React.ReactNode }) {
  const openedBurger = useSelector((state: RootState) => state.filter.openedBurger);

  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!openedBurger} width={{ sm: 200, lg: 300 }}>
      <Title order={4}>Фильтры</Title>
      {children}
    </Navbar>
  );
}
