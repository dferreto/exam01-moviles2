import { StyleSheet } from 'react-native';

export const style_02 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  logoPM: {
    height: 100, 
    resizeMode: 'contain',
  },
  detailContainer: {
    alignItems: 'center',
    padding: 20,
  },
  detailContainer2: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#30A7D7',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '90%',
  },
  pokemonImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
     flexDirection: 'row', 
  },
  title1: {
    fontSize: 24,
    marginTop: 10, 
    textAlign: 'center'
    },
    
    infoBox: {
        flex: 1,
        padding: 10,
      },
      pokemonName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000', 
        marginBottom: 5,
      },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  typeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  typeText: {
    fontSize: 16,
    marginHorizontal: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#FFDE00',
    borderRadius: 20,
    overflow: 'hidden',
    textAlign: 'center',
    marginVertical: 4,
  },
  moveContainer: {
    width: '90%',
    marginTop: 20,
  },
  moveTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#FFDE00',
    padding: 8,
    width: '100%',
    textAlign: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  moveText: {
    fontSize: 16,
    backgroundColor: '#F0F0F0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#DDDDDD',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feature: {
    fontSize: 16,
    color: '#000000', 
    marginTop: 2,
    fontWeight: 'bold',
    
  },
  
  
});

export default style_02;
