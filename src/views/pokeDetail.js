import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, View, Image, Text} from 'react-native';
import {style_02} from '../styles/style_02';
import {pokeTypes} from '../styles/pokeTypes';


const PokeDetail = ({route}) => {
  const {pokemonId} = route.params;
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const obtenerPokemonDetails = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId.toLowerCase()}`,
        );
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error('Error al obtener los detalles del Pokémon:', error);
      }
    };

    obtenerPokemonDetails();
  }, [pokemonId]);

  const getTypeDesign = typeElement => {
    switch (typeElement) {
      case 'fire':
        return pokeTypes.typeFire;
      case 'water':
        return pokeTypes.typeWater;
      case 'electric':
        return pokeTypes.typeElectric;
      case 'grass':
        return pokeTypes.typeGrass;
      case 'poison':
        return pokeTypes.typePoison;
      case 'flying':
        return pokeTypes.typeFlying;
      case 'bug':
        return pokeTypes.typeBug;
      case 'ground':
        return pokeTypes.typeGround;
      case 'fairy':
        return pokeTypes.typeFairy;
      case 'fighting':
        return pokeTypes.typeFighting;
      case 'psychic':
        return pokeTypes.typePsychic;
      case 'rock':
        return pokeTypes.typeRock;
      case 'steel':
        return pokeTypes.typeSteel;
      case 'ice':
        return pokeTypes.typeIce;
      case 'ghost':
        return pokeTypes.typeGhost;
      case 'dragon':
        return pokeTypes.typeDragon;
      case 'dark':
        return pokeTypes.typeDark;
      default:
        return pokeTypes.typeNormal;
    }
  };

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
                source={{uri: pokemonDetails.sprites.front_default}}
                style={style_02.pokemonImage}
              />
              <View style={style_02.textContainer}>
                <Text style={style_02.pokemonName}>
                  {pokemonDetails.name.toUpperCase()}
                </Text>
                <Text style={style_02.feature}>Features:</Text>
                <Text style={style_02.pokemonDetail}>
                  - Code: #{pokemonDetails.id}
                </Text>
                <Text style={style_02.pokemonDetail}>
                  - Height: {pokemonDetails.height}
                </Text>
                <Text style={style_02.pokemonDetail}>
                  - Weight: {pokemonDetails.weight}
                </Text>
              </View>
            </View>
            <View style={style_02.typeContainer}>
              <Text style={style_02.typeTitle}>Types to Belong</Text>
              {pokemonDetails.types.map(typeEntry => (
                <Text
                  key={typeEntry.type.name}
                  style={[
                    style_02.typeText,
                    getTypeDesign(typeEntry.type.name),
                  ]}>
                  {typeEntry.type.name.charAt(0).toUpperCase() +
                    typeEntry.type.name.slice(1).toLowerCase()}
                </Text>
              ))}
            </View>
            <View style={style_02.moveContainer}>
              <Text style={style_02.moveTitle}>Movements</Text>
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
