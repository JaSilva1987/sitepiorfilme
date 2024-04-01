import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
// import { getMovies } from "../services/api";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);

  // useEffect(() => {
  //   async function fetchData() {
  //     const moviesData = await getMovies();
  //     setMovies(moviesData);
  //   }

  //   fetchData();
  // }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Movie List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {currentMovies.map(
            (movie: { title: string; year: string; winner: string }) => (
              <tr key={movie.title}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.winner}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MovieList;
