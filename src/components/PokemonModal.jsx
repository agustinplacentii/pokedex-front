const PokemonModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{pokemon.name}</h2>

        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />

        <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p>

        <h4>Tipos:</h4>
        {pokemon.types.map((t) => (
          <span key={t.type.name}>{t.type.name} </span>
        ))}

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default PokemonModal;