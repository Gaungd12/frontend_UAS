import { useEffect, useState } from "react";
import { getMovies } from "./api";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Hero from "./components/Hero";

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
    } else {
      setFiltered(
        movies.filter((m) =>
          m.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Hero movie={filtered[0]} />
      <MovieList movies={filtered} />
    </>
  );
}

export default App;
