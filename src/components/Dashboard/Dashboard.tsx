import React from "react";
import TopStudiosSection from "./studios/getTopStudiosSection";
import ProducerIntervalsSection from "./producer/ProducerIntervalsSection";
import WinningMoviesSection from "./winner/WinningMoviesSection";
import YearsWithMultipleWinnersSection from "./winner/YearsWithMultipleWinnersSection";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-column">
        <div className="dashboard-item">
          <TopStudiosSection />
        </div>
        <div className="dashboard-item">
          <ProducerIntervalsSection />
        </div>
      </div>
      <div className="dashboard-column">
        <div className="dashboard-item">
          <YearsWithMultipleWinnersSection />
        </div>
        <div className="dashboard-item">
          <WinningMoviesSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
