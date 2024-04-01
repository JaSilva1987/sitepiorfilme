import React, { useEffect, useState } from "react";
import { getProducerIntervals } from "../../../services/api";
import "./ProducerIntervalsSection.css";

const ProducerIntervalsSection: React.FC = () => {
  const [minIntervals, setMinIntervals] = useState<any[]>([]);
  const [maxIntervals, setMaxIntervals] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducerIntervals = async () => {
      try {
        const intervals = await getProducerIntervals();
        setMinIntervals(intervals.min);
        setMaxIntervals(intervals.max);
      } catch (error) {
        console.error("Error fetching producer intervals:", error);
      }
    };
    fetchProducerIntervals();
  }, []);

  return (
    <div className="producer-intervals-container">
      <h2>Producer Intervals</h2>

      {/* Tabela para os filmes com o menor intervalo */}
      <div>
        <h3>Filmes com menor intervalo entre vitórias</h3>
        <table className="producer-intervals-table">
          <thead>
            <tr>
              <th>Produtor</th>
              <th>Intervalo</th>
              <th>Ano da Vitória Anterior</th>
              <th>Ano da Vitória Seguinte</th>
            </tr>
          </thead>
          <tbody>
            {minIntervals.map((interval, index) => (
              <tr key={index}>
                <td>{interval.producer}</td>
                <td>{interval.interval}</td>
                <td>{interval.previousWin}</td>
                <td>{interval.followingWin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabela para os filmes com o maior intervalo */}
      <div>
        <h3>Filmes com maior intervalo entre vitórias</h3>
        <table className="producer-intervals-table">
          <thead>
            <tr>
              <th>Produtor</th>
              <th>Intervalo</th>
              <th>Ano da Vitória Anterior</th>
              <th>Ano da Vitória Seguinte</th>
            </tr>
          </thead>
          <tbody>
            {maxIntervals.map((interval, index) => (
              <tr key={index}>
                <td>{interval.producer}</td>
                <td>{interval.interval}</td>
                <td>{interval.previousWin}</td>
                <td>{interval.followingWin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProducerIntervalsSection;
