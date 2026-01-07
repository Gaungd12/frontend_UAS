export default function Hero({ movie }) {
  if (!movie) return null;

  return (
    <section className="hero">
      <img src={movie.movie_banner} alt={movie.title} />
      <div className="overlay">
        <h1>{movie.title}</h1>
        <p>{movie.description.slice(0, 160)}...</p>
      </div>
    </section>
  );
}
