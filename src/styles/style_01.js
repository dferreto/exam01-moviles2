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
      logoPM: {
        height: 100, 
        resizeMode: 'contain', 
      },
      title1: {
        fontSize: 24,
        marginTop: 10, 
        textAlign: 'center'
      },
      navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 3,
        backgroundColor: '#365DAA', 
      },
      navItem: {
        fontSize: 14,
        color: '#FFCB03',
        justifyContent: 'flex-start'
      },

      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#365DAA',
        borderRadius: 10, 
        padding: 10, 
        marginVertical: 5, 
        marginHorizontal: 10, 
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
      },

      pokemonImage: {
        width: 100,
        height: 70,
        borderRadius: 25, 
        marginRight: 10, 
      },

      pokemonName: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFCB03',
      },
           
});
	