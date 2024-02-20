import {StyleSheet} from 'react-native';

		export const style_01 = StyleSheet.create({

            container: {
                flex: 1,
                backgroundColor: '#fff',
              },
              header: {
                alignItems: 'center',
                padding: 20,
              },
              headerText: {
                fontSize: 24,
                fontWeight: 'bold',
              },
              listItem: {
                flexDirection: 'row',
                padding: 10,
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
              },
              pokemonImage: {
                width: 50,
                height: 50,
                marginRight: 10,
              },
              pokemonName: {
                fontSize: 18,
              },
        });
	