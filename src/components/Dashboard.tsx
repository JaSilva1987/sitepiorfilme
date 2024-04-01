// Dashboard.tsx
import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import MovieList from "./MovieList";
import TopStudiosSection from "./Dashboard/studios/getTopStudios";
import ProducerIntervalsSection from "./Dashboard/producer/ProducerIntervalsSection";
import { getWinnersByYear } from "../services/api"; // Remova a importação de getTopStudios

const Dashboard: React.FC = () => {
  const [winnersByYear, setWinnersByYear] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const winnersByYearData = await getWinnersByYear();

      setWinnersByYear(winnersByYearData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Filters />
      <h2>Years with more than one winner</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {winnersByYear.map((year: string) => (
            <tr key={year}>
              <td>{year}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Inclua o componente TopStudiosSection aqui */}
      <TopStudiosSection />

      <ProducerIntervalsSection />
    </div>
  );
};

export default Dashboard;
