export default function PokemonGrid({ pokemons }) {
  return (
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
  );
}