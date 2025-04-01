import { FaDatabase, FaUsers } from "react-icons/fa";
import { FiBarChart, FiShoppingCart } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdTrendingDown } from "react-icons/md";

export const analytics = [
  {
    id: 1,
    icon: <FaUsers />,
    name: "Users",
    numbers: "1000",
    secondaryIcon: <MdTrendingDown />,
    rate: "-5% last month",
    date: "May 2025",
    backgroundColor: "#27D095",
    rateColor: "red",
  },
  {
    id: 2,
    icon: <FaDatabase />,
    name: "Data",
    numbers: "500",
    secondaryIcon: <FaArrowTrendUp />,
    rate: "+30% last month",
    date: "May 2025",
    backgroundColor: "#67CADF",
    rateColor: "green",
  },
  {
    id: 3,
    icon: <FiBarChart />,
    name: "Reports",
    numbers: "200",
    secondaryIcon: <FaArrowTrendUp />,
    rate: "+20% last month",
    date: "May 2025",
    backgroundColor: "#F54F5F",
    rateColor: "green",
  },
  {
    id: 4,
    icon: <FiShoppingCart />,
    name: "Orders",
    numbers: "50",
    secondaryIcon: <MdTrendingDown />,
    rate: "-10% last month",
    date: "May 2025",
    backgroundColor: "var(--primary-color)",
    rateColor: "red",
  },
];
