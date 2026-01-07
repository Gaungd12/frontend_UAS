import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "./api";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);

  const handleSearch = async (query) => {
    if (!query) return;
    const data = await searchMovies(query);
    setMovies(data.results);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
