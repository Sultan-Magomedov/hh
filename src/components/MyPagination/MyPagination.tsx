import { Pagination } from "@mantine/core";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { setPage } from "../../store/reducers/filterSlice";
import styles from "./MyPagination.module.css";

export const MyPagination = () => {
  const dispatch = useTypedDispatch();
  const { pages } = useTypedSelector((state) => state.searchReducer);
  const { page } = useTypedSelector((state) => state.filterReducer);

  const handlePageChange = (page: number) => {
    const newPage = page - 1;
    if (newPage !== page) {
      dispatch(setPage(newPage));
    }
  };

  return (
    <>
      {pages > 1 && (
        <Pagination
          className={styles.pagination}
          total={pages}
          value={page + 1}
          onChange={handlePageChange}
          withEdges
        />
      )}
    </>
  );
};
