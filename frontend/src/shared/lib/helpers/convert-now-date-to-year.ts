import dayjs from "dayjs";

export function convertLocalTimeToYear(date: Date) {
  return Number(dayjs(date).format("YYYY"));
}
