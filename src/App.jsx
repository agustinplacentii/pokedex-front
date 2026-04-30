import { useState } from "react";
import { usePokemons } from "./hooks/usePokemons";

import Header from "./components/Header/header";
import PokemonGrid from "./components/PokemonGrid";
import Loading from "./components/Loading";
import ErrorState from "./components/ErrorState";

export default function App() {
  const { pokemons, loading, error, refetch } = usePokemons();
  const [search, setSearch] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon?.name?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loading />;
  if (error) return <ErrorState type={error} onRetry={refetch} />;

  return (
    <div className="container">
      <Header search={search} setSearch={setSearch} />
      <PokemonGrid pokemons={filteredPokemons} />
    </div>
  );
}