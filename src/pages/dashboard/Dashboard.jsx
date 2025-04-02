import React from "react";
import AnalyticsCard from "../../components/analyticsCard/AnalyticsCard";
import { analytics } from "../../mock/analytics";
import { Grid } from "@mui/material";
import UserTable from "../../components/userTable/UserTable";
import "./Dashboard.css";
import {
  engagementStatsData,
  marketAnalysisData,
  userInteractionsData,
} from "../../mock/sampleData";
import { FiUsers } from "react-icons/fi";
import { FaChartPie } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import BasicPie from "./../../components/basicPie/BasicPie";

const Dashboard = () => {
  return (
    <>
      <div className="grid-container">
        {analytics.map((data) => {
          return (
            <AnalyticsCard
              key={data.id}
              icon={data.icon}
              name={data.name}
              numbers={data.numbers}
              secondaryIcon={data.secondaryIcon}
              rate={data.rate}
              date={data.date}
              backgroundColor={data.backgroundColor}
              rateColor={data.rateColor}
            />
          );
        })}
      </div>
      <div className="contentStyle">
        <Grid container spacing={2}>
          <UserTable />
        </Grid>
      </div>
      <div className="contentStyle">
        <Grid
          container
          spacing={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={4} display="flex" justifyContent="center">
            <BasicPie
              title="User Interactions"
              data={userInteractionsData}
              Icon={FiUsers}
            />
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="center">
            <BasicPie
              title="Market Analysis"
              data={marketAnalysisData}
              Icon={FaChartPie}
            />
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="center">
            <BasicPie
              title="Engagement Stats"
              data={engagementStatsData}
              Icon={MdAnalytics}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
