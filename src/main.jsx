body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #111;
  color: white;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #222;
}

input {
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.movie-card {
  background: #1c1c1c;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
}

.movie-card img {
  width: 100%;
  border-radius: 10px;
}
