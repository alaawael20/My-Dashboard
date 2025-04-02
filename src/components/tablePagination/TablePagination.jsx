import React from "react";
import Pagination from "@mui/material/Pagination";

const TablePagination = ({ page, totalPages, onPageChange }) => {
  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={(_, newPage) => onPageChange(newPage)}
      sx={{
        "& .MuiPaginationItem-root": {
          color: "var(--primary-color)",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "var(--secondary-color)",
          },
        },
        "& .Mui-selected": {
          backgroundColor: "var(--primary-color)",
          color: "var(--white-color)",
          "&:hover": {
            backgroundColor: "var(--primary-color)",
          },
        },
      }}
      style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
    />
  );
};

export default TablePagination;
