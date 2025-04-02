import { useState } from "react";

const usePagination = (data, rowsPerPage) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return { page, totalPages, paginatedData, setPage };
};

export default usePagination;
