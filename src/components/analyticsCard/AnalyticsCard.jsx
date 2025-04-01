import React from "react";
import "./AnalyticsCard.css";

const AnalyticsCard = ({
  icon,
  name,
  numbers,
  secondaryIcon,
  rate,
  date,
  backgroundColor,
  rateColor,
}) => {
  return (
    <div className="card">
      <div>
        <span
          className="iconStyle"
          style={{ backgroundColor: backgroundColor }}
        >
          {icon}
        </span>
        <span className="analysis">
          <span>{name}</span>
          <span>Numbers: {numbers}</span>
          <span style={{ color: rateColor }}>
            {secondaryIcon} {rate}
          </span>
        </span>
      </div>
      <div>{date}</div>
    </div>
  );
};

export default AnalyticsCard;
