import { useEffect, useState } from "react";
import { getMovies } from "./api";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  const handleSearch = (query) => {
    if (!query) return;
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setMovies(filtered);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
