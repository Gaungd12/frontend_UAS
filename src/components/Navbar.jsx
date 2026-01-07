import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <nav>
      <h1>🎬 MovieVerse</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Cari film..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </nav>
  );
}
