import {
  FiHome,
  FiUsers,
  FiDatabase,
  FiShoppingCart,
  FiBarChart,
  FiSettings,
} from "react-icons/fi";

export const menuItems = [
  { text: "Dashboard", path: "/", icon: <FiHome /> },
  { text: "Users Management", path: "/users-management", icon: <FiUsers /> },
  { text: "Data Management", path: "/data-management", icon: <FiDatabase /> },
  { text: "Orders", path: "/orders", icon: <FiShoppingCart /> },
  { text: "Reports", path: "/reports", icon: <FiBarChart /> },
  { text: "Settings", path: "/settings", icon: <FiSettings /> },
];
