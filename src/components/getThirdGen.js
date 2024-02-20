
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getThirdGen = async () => {
  try {
    const response = await fetch(`${POKE_API_URL}?offset=251&limit=135`);
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('Error al buscar Pokémon de la tercera generación:', error);
    return []; 
  }
};
