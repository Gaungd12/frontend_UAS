export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p className="desc">
        {movie.description.slice(0, 90)}...
      </p>

      <div className="info">
        <span>🎬 {movie.release_date}</span>
        <span>⭐ {movie.rt_score}</span>
      </div>
    </div>
  );
}
