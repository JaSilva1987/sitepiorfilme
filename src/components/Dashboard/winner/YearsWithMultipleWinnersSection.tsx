import React, { useState, useEffect } from "react";
import { getYearsWithMultipleWinners } from "../../../services/api";
import "./YearsWithMultipleWinnersSection.css";

const YearsWithMultipleWinnersSection: React.FC = () => {
  const [yearsWithMultipleWinners, setYearsWithMultipleWinners] = useState<
    { year: number; winnerCount: number }[]
  >([]);

  useEffect(() => {
    const fetchYearsWithMultipleWinners = async () => {
      try {
        const data = await getYearsWithMultipleWinners();
        setYearsWithMultipleWinners(data.years);
      } catch (error) {
        console.error("Error fetching years with multiple winners:", error);
      }
    };

    fetchYearsWithMultipleWinners();
  }, []);

  return (
    <div className="years-with-multiple-winners-container">
      <h2>Years with Multiple Winners</h2>
      <div className="table-container">
        <table className="years-table">
          <thead className="table-header">
            <tr>
              <th className="wins-count-cell">Year</th>
              <th className="wins-count-cell">Winner Count</th>
            </tr>
          </thead>
          <tbody className="table-content">
            {yearsWithMultipleWinners.map((yearData, index) => (
              <tr key={index}>
                <td className="wins-count-cell">{yearData.year}</td>
                <td className="wins-count-cell">{yearData.winnerCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YearsWithMultipleWinnersSection;
