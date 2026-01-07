export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>🎬 {movie.release_date}</p>
      <p>⭐ {movie.rt_score}</p>
    </div>
  );
}
