import React, { useEffect, useState } from "react";
import { getMovies } from "../services/api";
import "./MovieList.css";

const MoviesList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = async (pageNumber: number) => {
    try {
      const response = await getMovies(pageNumber, 15);
      setMovies(response.content);
      setTotalPages(response.totalPages - 1);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleFirstPage = () => {
    setPage(1);
  };

  const handleLastPage = () => {
    setPage(totalPages);
  };

  return (
    <div className="winning-movies-container">
      <h2>Movies List</h2>
      <table className="winning-movies-table">
        <thead className="table-header">
          <tr>
            <th>ID</th>
            <th>Year</th>
            <th>Title</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody className="table-content">
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.year}</td>
              <td>{movie.title}</td>
              <td>{movie.winner ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handleFirstPage} disabled={page === 1}>
          Inicio
        </button>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Anterior
        </button>
        <span>{`Page ${page} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Próximo
        </button>
        <button onClick={handleLastPage} disabled={page === totalPages}>
          Último
        </button>
      </div>
    </div>
  );
};

export default MoviesList;
