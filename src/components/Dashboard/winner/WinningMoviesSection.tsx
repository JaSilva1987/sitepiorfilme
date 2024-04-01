import React, { useState } from "react";
import { getWinnersByYear } from "../../../services/api";
import "./WinningMoviesSection.css";

const WinningMoviesSection: React.FC = () => {
  const [year, setYear] = useState<string>("");
  const [winningMovies, setWinningMovies] = useState<any[]>([]);

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  const fetchWinningMovies = async () => {
    try {
      const movies = await getWinnersByYear(year);
      setWinningMovies(movies);
    } catch (error) {
      console.error("Error fetching winning movies:", error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchWinningMovies();
  };

  return (
    <div className="winning-movies-container">
      <h2>Winning Movies</h2>
      <form onSubmit={handleSubmit} className="search-form">
        <label>
          Year:
          <input
            type="text"
            value={year}
            onChange={handleYearChange}
            className="year-input"
          />
        </label>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="table-container">
        <table className="winning-movies-table">
          <thead className="table-header">
            <tr>
              <th>ID</th>
              <th>Year</th>
              <th>Title</th>
              <th>Studios</th>
              <th>Producers</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody className="table-content">
            {winningMovies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.year}</td>
                <td>{movie.title}</td>
                <td>{movie.studios.join(", ")}</td>
                <td>{movie.producers.join(", ")}</td>
                <td>{movie.winner ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WinningMoviesSection;
