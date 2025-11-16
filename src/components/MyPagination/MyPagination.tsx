import { Pagination } from "@mantine/core";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { fetchVacancies } from "../../store/reducers/searchSlice";
import { setPage } from "../../store/reducers/filterSlice";

export const MyPagination = () => {
  const dispatch = useTypedDispatch();
  const { pages } = useTypedSelector((state) => state.searchReducer);
  const { page } = useTypedSelector((state) => state.filterReducer);

  const handlePageChange = (page: number) => {
    const newPage = page - 1;
    if (newPage !== page) {
      dispatch(setPage(newPage));
      dispatch(fetchVacancies());
    }
  };
  return (
    <Pagination
      w={659}
      style={{ justifyItems: "center" }}
      total={pages}
      value={page + 1}
      onChange={handlePageChange}
      withEdges
    />
  );
};
