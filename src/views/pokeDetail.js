import React from 'react';
import { SafeAreaView, View, Image, Text } from 'react-native';
import { style_01 } from '../styles/style_01';


const PokeDetail = ({ navigation }) => {
 

  return (
    <SafeAreaView style={style_01.container}>
      <View style={style_01.header}>
        <Image 
          source={require('../imgs/logoPM.png')}
          style={style_01.logoPM}
        />
        <Text style={style_01.title1}>Pokémon Information</Text>
      </View>
    </SafeAreaView>
  );
};
export default PokeDetail;