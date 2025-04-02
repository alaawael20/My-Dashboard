import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const BasicPie = ({
  title,
  data,
  width = 500,
  height = 250,
  backgroundColor = "var(--secondary-color)",
  Icon,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor,
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <p className="tableTitle" style={{ marginBottom: "20px" }}>
        {Icon && <Icon />} <span>{title}</span>
      </p>
      <PieChart series={[{ data }]} width={width} height={height} />
    </div>
  );
};

export default BasicPie;
