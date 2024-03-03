import { StyleSheet } from 'react-native';

export const style_02 = StyleSheet.create({

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
  
  detailContainer: {
    alignItems: 'center',
    padding: 20,
    
  },

  detailContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    padding: 20,
    backgroundColor: '#FFDE00',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '100%',
    borderWidth: 3,
    borderColor: '#365DAA',
  },
  
  textContainer: {
    flex: 1, 
    marginLeft: 10, 
  },
  
  pokemonImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
     flexDirection: 'row', 
  },
  title1: {
    fontSize: 24,
    marginTop: 10, 
    textAlign: 'center',
    backgroundColor: '#365DAA',
    color: 'white'
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

  pokemonDetail: {
    color: 'black'
  },

  typeContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 8,
    width: '90%',
    backgroundColor: '#F0F0F0',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    
  },

  typeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#FFDE00',
    padding: 8,
    width: '100%',
    textAlign: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 3,  
    borderColor: '#365DAA', 
  },
  
  typeText: {
    fontSize: 17,
    marginTop: 10,
    marginHorizontal: 4, 
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: '#FFDE00',
    borderRadius: 20,
    overflow: 'hidden',
    textAlign: 'center',
    marginVertical: 10,
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
    borderWidth: 3,  
    borderColor: '#365DAA', 
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

  typeFire: {
    backgroundColor: '#FD7D24',
    color: 'white',
    borderWidth: 3,  
    borderColor: '#DF6F1F', 
  },

  typeWater: {
    backgroundColor: '#4592C4',
    color: 'white',
    borderWidth: 3,  
    borderColor: '#3A7AA2', 
  },

  typeElectric: {
    backgroundColor: '#EED535',
    color: 'black',
    borderWidth: 3, 
    borderColor: '#D0BA2E', 
  },

  typeNormal: {
    backgroundColor: '#A4ACAF',
    color: 'black',
    borderWidth: 3, 
    borderColor: '#8A9093', 
  },

  typeGrass: {
    backgroundColor: '#9BCC50',
    color: 'black',
    borderWidth: 3, 
    borderColor: '#84AF44', 
  },

  typePoison: {
    backgroundColor: '#B97FC9',
    color: 'white',
    borderWidth: 3, 
    borderColor: '#9E6DAC', 
  },

  typeFlying: {
    backgroundColor: '#A78EF1',
    color: 'black',
    borderWidth: 3, 
    borderColor: '#947ED5', 
    
  },

  typeBug: {
    backgroundColor: '#719F3F',
    color: 'white',
    borderWidth: 3, 
    borderColor: '#5D8134', 
    
  }

  

});

export default style_02;
