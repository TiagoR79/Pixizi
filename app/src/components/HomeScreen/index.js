import React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = () => {
	return (
		<>
			<View style={{
				height: '100%',
				backgroundColor: '#00d4aaff',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<Text style={{
					backgroundColor: '#00d4aaff',
					color: 'white',
					fontSize: 50,
					fontWeight: 'bold',
				}}>Pixizi</Text>
			</View>
		</>
	);
};

export default HomeScreen;
