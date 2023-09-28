import { MultiSelect } from "@mantine/core";
import { genres } from "./constants";
import { useStyles } from "./ui.styles";
import { useDispatch } from "react-redux";
import { selectGenres } from "~features/navbar/model/slice";

export function SelectGenre() {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  return (
    <MultiSelect
      data={genres}
      label="Жанры"
      placeholder="Выберите жанры"
      mt="16px"
      searchable
      clearButtonProps={{ "aria-label": "Clear selection" }}
      clearable
      disableSelectedItemFiltering
      transitionProps={{ duration: 150, transition: "scale", timingFunction: "ease" }}
      classNames={{ item: classes.item }}
      onChange={(value) => dispatch(selectGenres(value))}
    />
  );
}
