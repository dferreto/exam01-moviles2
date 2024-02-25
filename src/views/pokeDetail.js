import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native';
import { style_02 } from '../styles/style_02';

const PokeDetail = ({ route }) => {
  const { pokemonId } = route.params; 
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [setIsLoading] = useState(true);

  useEffect(() => {
    const obtenerPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.toLowerCase()}`);
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error('Error al obtener los detalles del Pokémon:', error);
      } finally {
        setIsLoading(false);
      }
    };

    obtenerPokemonDetails();
  }, [pokemonId]);

  return (
    <SafeAreaView style={style_02.container}>
      <ScrollView>
        <View style={style_02.header}>
          <Image
            source={require('../imgs/logoPM.png')}
            style={style_02.logoPM}
          />
        </View>
        <Text style={style_02.title1}>Pokémon Information</Text>
        {pokemonDetails && (
          <View style={style_02.detailContainer}>
            <View style={style_02.detailContainer2}>
            <Image
              source={{ uri: pokemonDetails.sprites.front_default }}
              style={style_02.pokemonImage}
            />
            <Text style={style_02.pokemonName}>{pokemonDetails.name.toUpperCase()}</Text>
            <Text style={style_02.feature}>Features:</Text>
            <Text>- Code:{pokemonDetails.id.toString().padStart(3)}</Text>
            <Text>- Height: {pokemonDetails.height}</Text>
            <Text>- Weight: {pokemonDetails.weight}</Text>
            </View>
            <View style={style_02.typeContainer}>
              <Text style={style_02.typeTitle}>Types to Belong</Text>
              {pokemonDetails.types.map((typeEntry) => (
                <Text key={typeEntry.type.name} style={style_02.typeText}>
                  {typeEntry.type.name.toUpperCase()}
                </Text>
              ))}
            </View>
        <View style={style_02.moveContainer}>
              <Text style={style_02.moveTitle}>Movimientos</Text>
              {pokemonDetails.moves.map((moveEntry, index) => (
                <Text key={index} style={style_02.moveText}>
                  {moveEntry.move.name}
                </Text>
              ))}
            </View>
            
          </View>
          
          
        )}
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default PokeDetail;
