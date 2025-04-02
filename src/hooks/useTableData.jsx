import { useState } from "react";
import { userData } from "../mock/userData";

export function useTableData() {
  const [data, setData] = useState(userData);

  return { data, setData };
}
