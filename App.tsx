/* call react libraries */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* custom modules */
import Home from './src/views/home';
import PokeDetail from './src/views/pokeDetail';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
    <Stack.Screen name="PokeDetail" component={PokeDetail} options={{title: 'Info Pokémon'}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;