import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
		import {style_01} from '../styles/style_01';

		const Home = ({ navigation }) => {
            return (
              <SafeAreaView style={style_01.container}>
                <View style={style_01.header}>
                  <Image 
                    source={require('../imgs/logoPM.png')} // Asegúrate de que la imagen está en la ruta correcta
                    style={style_01.logoPM}
                  />
                </View>
                <View style={style_01.navBar}>
                  <TouchableOpacity onPress={() => navigation.navigate('First')}>
                    <Text style={style_01.navItem}>First gen</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Second')}>
                    <Text style={style_01.navItem}>Second gen</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Third')}>
                    <Text style={style_01.navItem}>Third gen</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Fourth')}>
                    <Text style={style_01.navItem}>Fourth gen</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Fifth')}>
                    <Text style={style_01.navItem}>Fifth gen</Text>
                  </TouchableOpacity>
                </View>
                <Text style={style_01.title1}>First Generation</Text>
                {/* Aquí añadirías el resto del contenido de tu vista como la lista de Pokémons */}
              </SafeAreaView>
            );
          };

		export default Home;