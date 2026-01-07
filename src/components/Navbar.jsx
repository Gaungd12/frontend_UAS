import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        🎬 <span>MovieVerse</span>
      </div>

      <input
        type="text"
        placeholder="Cari judul film..."
        value={query}
        onChange={handleChange}
        className="search-input"
      />
    </nav>
  );
}
