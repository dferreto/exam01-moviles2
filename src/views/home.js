import React from 'react';
		import {SafeAreaView, Text, View} from 'react-native';
		import {style_01} from '../styles/style_01';

		const Home = ({navigation}) => {
		  return (
			<SafeAreaView>
			  <View>
				<Text style={style_01.tit_01}>Express Notes</Text>
			  </View>
			</SafeAreaView>
		  );
		};

		export default Home;