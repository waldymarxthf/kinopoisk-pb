import { AppShell } from "@mantine/core";
import { Outlet } from "react-router";
import AppProvider from "./providers/provider";
import HeaderFilms from "~widgets/header";

function App() {
  return (
    <AppProvider>
      <AppShell>
        <HeaderFilms />
        <Outlet />
      </AppShell>
    </AppProvider>
  );
}
export default App;
