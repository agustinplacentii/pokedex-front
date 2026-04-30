import { useEffect, useState } from "react";
import { getPokemons } from "../services/pokemonService";

export function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return {
    pokemons,
    loading,
    error,
    refetch: fetchPokemons,
  };
}