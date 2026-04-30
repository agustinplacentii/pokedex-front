export default function ErrorState({ type, onRetry }) {
  if (type === "SERVICE_PARTIAL_DOWN") {
    return (
      <div className="error-container">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
          alt="Magnemite"
          className="error-img"
        />
        <h2>Magnemite está teniendo interferencias ⚡</h2>
        <p>El servicio está parcialmente caído.</p>
        <button onClick={onRetry}>Reintentar</button>
      </div>
    );
  }

  if (type === "GENERIC_ERROR") {
    return (
      <div className="error-container">
        <h2>❌ Error</h2>
        <button onClick={onRetry}>Reintentar</button>
      </div>
    );
  }

  return null;
}