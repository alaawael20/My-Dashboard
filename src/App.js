import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/notFoundPage/NotFound";
import UserManagement from "./pages/userManagement/UserManagement";
import DataManagement from "./pages/dataManagement/DataManagement";
import Orders from "./pages/orders/Orders";
import Reports from "./pages/reports/Reports";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users-management" element={<UserManagement />} />
        <Route path="/data-management" element={<DataManagement />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
