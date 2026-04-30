const typeColors = {
  fire: "#f08030",
  water: "#6890f0",
  grass: "#78c850",
  electric: "#f8d030",
  psychic: "#f85888",
  ice: "#98d8d8",
  dragon: "#7038f8",
  dark: "#705848",
  fairy: "#ee99ac",
  normal: "#a8a878",
};

const PokemonCard = ({ pokemon, onClick }) => {
  const mainType = pokemon.types[0].type.name;

  return (
    <div
      className="card"
      style={{ backgroundColor: typeColors[mainType] }}
      onClick={() => onClick(pokemon)}
    >
      <h3>{pokemon.name}</h3>

      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />

      <div className="types">
        {pokemon.types.map((t) => (
          <span key={t.type.name}>{t.type.name}</span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;