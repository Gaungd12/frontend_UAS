export default function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.image}`;

  const shortDescription =
    movie.description.length > 120
      ? movie.description.slice(0, 120) + "..."
      : movie.description;

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p className="desc">{shortDescription}</p>

      <div className="info">
        <span>🎬 {movie.release_date}</span>
        <span>⭐ {movie.rt_score}</span>
      </div>
    </div>
  );
}
