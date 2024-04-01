import React, { useEffect, useState } from "react";
import { getTopStudios } from "../../../services/api";
import "./getTopStudios.css";

const TopStudiosSection: React.FC = () => {
  const [topStudios, setTopStudios] = useState<any[]>([]);

  useEffect(() => {
    const fetchTopStudios = async () => {
      try {
        const studios = await getTopStudios();
        setTopStudios(studios);
      } catch (error) {
        console.error("Error fetching top studios:", error);
      }
    };
    fetchTopStudios();
  }, []);

  return (
    <div className="table-container">
      <h2>Top Studios</h2>
      <table className="table-content full-width-table">
        <thead className="table-header">
          <tr>
            <th className="wins-count-cell">Name</th>
            <th className="wins-count-cell">Win Count</th>
          </tr>
        </thead>
        <tbody className="table-content">
          {topStudios.map((studio, index) => (
            <tr key={index}>
              <td>{studio.name}</td>
              <td className="wins-count-cell">{studio.winCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopStudiosSection;
