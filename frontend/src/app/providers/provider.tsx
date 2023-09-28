import React from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { PocketBaseProvider } from "./pb-provider";
import { Provider } from "react-redux";
import { store } from "~app/store/store";

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <Provider store={store}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <PocketBaseProvider>{children}</PocketBaseProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </Provider>
  );
}
