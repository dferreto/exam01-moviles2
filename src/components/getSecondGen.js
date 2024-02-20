
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getSecondGen = async () => {
  try {
    const response = await fetch(`${POKE_API_URL}?offset=151&limit=100`);
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('Error al buscar Pokémon de la segunda generación:', error);
    return []; 
  }
};
