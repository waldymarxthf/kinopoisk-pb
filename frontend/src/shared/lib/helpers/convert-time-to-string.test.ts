import { convertMinutesToHours } from "./convert-time-to-string";

describe("тест конвертации времени", () => {
  test("Нормальное значение", () => {
    expect(convertMinutesToHours(112)).toBe("1 ч. 52 мин.");
  });
  test("меньше корректного", () => {
    expect(convertMinutesToHours(-10)).toBe("-");
  });
});
