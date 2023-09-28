import NavbarFilters from "~entities/navbar";
import PaginationPages from "~features/navbar/ui/pagination";
import SelectGenre from "~features/navbar/ui/select-genres";
import SelectSort from "~features/navbar/ui/select-sort";
import SelectYearSlider from "~features/navbar/ui/select-year-slider";

export function NavbarFilmsFilter() {
  return (
    <NavbarFilters>
      <SelectSort />
      <SelectYearSlider />
      <SelectGenre />
      <PaginationPages />
    </NavbarFilters>
  );
}
