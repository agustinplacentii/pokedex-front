import logo from "../assets/pokemon-23.svg";
import pokedex from "../assets/pokedex.png"; // 👈 imagen de la Pokédex
import "./header.css";

export default function Header({ search, setSearch }) {
  return (
    <div className="header">

      {/* 🟡 LOGO */}
      <img src={logo} className="logo" alt="Pokemon" />

      {/* 📟 POKEDEX DEVICE */}
      <div className="pokedex-container">

        {/* 🖼️ imagen de la pokédex */}
        <img src={pokedex} className="pokedex-img" alt="Pokedex" />

        {/* 🔍 input dentro de la pantalla */}
        <input
          className="pokedex-input"
          type="text"
          placeholder="Buscar Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    </div>
  );
}