import { useEffect, useState } from "react";
import { getPokemons } from "./services/pokemonService";
import logo from "./assets/pokemon-23.svg";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchPokemons = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getPokemons();
      setPokemons(data);
    } catch (err) {
      console.error(err);

      if (
        err.message?.includes("Unexpected end of JSON input") ||
        err.message === "INVALID_JSON" ||
        err.message === "SERVICE_PARTIAL_DOWN"
      ) {
        setError("SERVICE_PARTIAL_DOWN");
      } else {
        setError("GENERIC_ERROR");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  // 🔍 filtro por nombre
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p>Cargando pokemones...</p>;
  }

  if (error === "SERVICE_PARTIAL_DOWN") {
    return (
      <div className="error-container">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
          alt="Magnemite"
          className="error-img"
        />
        <h2>Magnemite está teniendo interferencias ⚡</h2>
        <p>El servicio está parcialmente caído.</p>
        <button onClick={fetchPokemons}>Reintentar</button>
      </div>
    );
  }

  if (error === "GENERIC_ERROR") {
    return (
      <div className="error-container">
        <h2>❌ Error</h2>
        <button onClick={fetchPokemons}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="container">
<img src={logo} className="logo" alt="Pokemon" />

      {/* 🔍 Pokédex buscador */}
      <div className="search-container">
        <div className="pokedex-search">
          <span className="lens">🔴</span>
          <input
            type="text"
            placeholder="Buscar Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* 📦 Grid */}
      <div className="grid">
        {filteredPokemons.map((pokemon) => (
          <div className="card" key={pokemon.id ?? pokemon.name}>
            {pokemon.image && (
              <img src={pokemon.image} alt={pokemon.name} />
            )}
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}