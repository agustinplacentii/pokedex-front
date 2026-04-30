import logo from "../../assets/pokemon-23.svg";
import pokedex from "../../assets/pokedex.jpg";
import "../../index.css";

export default function Header({ search, setSearch }) {
  return (
    <div className="header">

      <img src={logo} className="logo" alt="Pokemon" />

      <div className="pokedex-container">

        <img src={pokedex} className="pokedex-img" alt="Pokedex" />

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