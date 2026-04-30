const API_URL = "/api/Pokemon";

export const getPokemons = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

export const getPokemonById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();
  return data;
};