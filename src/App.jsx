import { useEffect, useState } from "react";
import { getPokemons } from "./services/pokemonService";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemons(); // 👈 USÁS EL SERVICE
        setPokemons(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) return <p>Cargando pokemones...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Mi Pokédex</h1>

      <div className="grid">
        {pokemons.map((pokemon) => (
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