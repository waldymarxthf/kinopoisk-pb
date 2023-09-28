import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  item: {
    "&[data-selected]": {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.yellow[9] : theme.colors.yellow[1],
        color: theme.colorScheme === "dark" ? theme.white : theme.colors.yellow[9],
      },
    },
  },
}));
