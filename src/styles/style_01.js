import {StyleSheet} from 'react-native';

		export const style_01 = StyleSheet.create({

      container: {
        flex: 1,
        backgroundColor: '#fff', // El color de fondo puede ser ajustado
      },
      header: {
        alignItems: 'center',
        padding: 20,
      },
      logoPM: {
        height: 100, // Ajusta el tamaño según sea necesario
        resizeMode: 'contain', // Esto asegura que el logo se ajuste al tamaño sin perder la proporción
      },
      title1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10, // Ajusta el espacio si es necesario
        textAlign: 'center'
      },
      navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 2, // Ajusta el espacio vertical si es necesario
        backgroundColor: '#365DAA', // Ajusta el color de fondo si es necesario
      },
      navItem: {
        fontSize: 14,
        color: '#FFCB03',
        justifyContent: 'flex-start'
      },
           
        });
	