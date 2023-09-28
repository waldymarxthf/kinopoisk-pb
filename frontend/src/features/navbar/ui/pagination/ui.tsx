import { Stack, Pagination } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~app/store/store";
import { selectPage } from "~features/navbar/model/slice";

export function PaginationPages() {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.filter.page);
  return (
    <Stack justify="flex-end" h="100rem">
      <Pagination
        spacing="1px"
        position="apart"
        total={250}
        color="yellow"
        size="xs"
        radius="xl"
        value={page}
        onChange={(value) => dispatch(selectPage(value))}
      />
    </Stack>
  );
}
