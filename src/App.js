import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFoundPage/NotFound";
import UserManagement from "./pages/userManagement/UserManagement";
import DataManagement from "./pages/dataManagement/DataManagement";
import Orders from "./pages/orders/Orders";
import Reports from "./pages/reports/Reports";
import Settings from "./pages/settings/Settings";
import { Box } from "@mui/material";
import SideBar from "./components/sideBar/SideBar";
import Navbar from "./components/navBar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", height: "90vh", marginTop: "30px" }}>
      <Box>
        <SideBar />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box>
          <Navbar />
        </Box>

        <Box sx={{ flexGrow: 1, overflowY: "auto", padding: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users-management" element={<UserManagement />} />
          <Route path="data-management" element={<DataManagement />} />
          <Route path="orders" element={<Orders />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
