import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Loading({ navigation }) {
	return (
		<View style={{
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#00d4aaff'
			}}>
			<Text style={{
				color: 'white',
				fontSize: 30,
				fontWeight: 'bold',
			}}
			onPress={() => navigation.navigate('Login')}
			>PIXIZI</Text>

		</View>
	);
}

export default Loading;
