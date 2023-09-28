import { RangeSlider, Text } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~app/store/store";
import { selectYear } from "~features/navbar/model/slice";

export function SelectYearSlider() {
  const selectedYear = useSelector((state: RootState) => state.filter.year);
  const dispatch = useDispatch();
  return (
    <>
      <Text fz="0.875rem" fw={500} mt="15px">
        Год релиза:
      </Text>
      <RangeSlider
        min={1890}
        max={2023}
        mt="30px"
        color="yellow"
        size="xs"
        labelAlwaysOn
        defaultValue={selectedYear}
        onChangeEnd={(value) => dispatch(selectYear(value))}
      />
    </>
  );
}
