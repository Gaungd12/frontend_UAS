import { useEffect, useState } from "react";
import { getMovies } from "./api";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
      setFiltered(data);
    });
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFiltered(movies);
      return;
    }

    const result = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    setFiltered(result);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <MovieList movies={filtered} />
    </>
  );
}

export default App;
