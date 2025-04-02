import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTableData } from "../../hooks/useTableData";
import TablePagination from "../tablePagination/TablePagination";
import { FiUsers } from "react-icons/fi";
import "./UserTable.css";
import usePagination from "../../hooks/usePagination";

export default function UserTable() {
  const { data } = useTableData();
  const rowsPerPage = 5;

  const { page, totalPages, paginatedData, setPage } = usePagination(
    data,
    rowsPerPage
  );

  return (
    <TableContainer component={Paper} className="table">
      <p className="tableTitle">
        <FiUsers /> <span>Top Users</span>
      </p>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="tableHead">
          <TableRow
            sx={{
              "& th": {
                fontSize: 18,
                fontWeight: "bold",
                color: "var(--primary-color)",
              },
            }}
          >
            <TableCell>ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.phone}</TableCell>
              <TableCell align="center">{user.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </TableContainer>
  );
}
