
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getFirstGen = async () => {
  try {
    const response = await fetch(`${POKE_API_URL}?offset=0&limit=151`);
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('Error al buscar Pokémon de la primera generación:', error);
    return []; 
  }
};
