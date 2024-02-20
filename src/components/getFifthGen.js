
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getFifthGen = async () => {
  try {
    const response = await fetch(`${POKE_API_URL}?offset=493&limit=156`);
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('Error al buscar Pokémon de la quinta generación:', error);
    return []; 
  }
};