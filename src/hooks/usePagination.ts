import { useCallback, useMemo, useState } from "react";
/**
 * 分页功能的逻辑封装，方便在React组件中使用分页功能
 * @param props
 * @returns
 */
export const usePagination = (props: {
  defaultPage?: number;
  defaultPageSize?: number;
}) => {
  const { defaultPage = 1, defaultPageSize = 20 } = props || {};
  const pageSizeOptions = ["20", "50", "100", "200", "400"];
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const offset = useMemo(
    () => (currentPage - 1) * pageSize,
    [currentPage, pageSize]
  );

  const handlePageChange = useCallback(
    (pg: number, size?: number) => {
      setCurrentPage(pg);
      setPageSize(size || defaultPageSize);
    },
    [defaultPageSize]
  );

  return {
    pageSizeOptions,
    page: currentPage,
    pageSize,
    offset,
    limit: pageSize, // limit 直接等于 pageSize
    handlePageChange,
  };
};
