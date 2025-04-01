import React from "react";
import AnalyticsCard from "../../components/analyticsCard/AnalyticsCard";
import { analytics } from "../../mock/analytics";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="grid-container">
      {analytics.map((e) => {
        return (
          <AnalyticsCard
            key={e.id}
            id={e.id}
            icon={e.icon}
            name={e.name}
            numbers={e.numbers}
            secondaryIcon={e.secondaryIcon}
            rate={e.rate}
            date={e.date}
            backgroundColor={e.backgroundColor}
            rateColor={e.rateColor}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
