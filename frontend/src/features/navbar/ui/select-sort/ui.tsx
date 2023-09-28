import { Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { selectSortData } from "./constants";
import { useStyles } from "./ui.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectSort } from "~features/navbar/model/slice";
import { RootState } from "~app/store/store";

export function SelectSort() {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filter.sort);
  return (
    <Select
      label="Сортировать по:"
      placeholder="Выберите один"
      rightSection={<IconChevronDown size="1rem" />}
      mt="15px"
      onChange={(value) => dispatch(selectSort(value))}
      defaultValue={sort}
      transitionProps={{ duration: 150, transition: "scale", timingFunction: "ease" }}
      data={selectSortData}
      classNames={{ item: classes.item, rightSection: classes.rightSection }}
    />
  );
}
