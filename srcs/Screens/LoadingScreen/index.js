import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

function Loading({ navigation }) {
	return (
		<View style={{
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#00d4aaff'
		}}
		>
			<Image
				source={require('../../../assets/logo/logo2.png')}
				style={{ width: 150, height: 150, alignSelf: 'center' }}
				/>
			<Text
				onPress={() => navigation.navigate('Login')}
			> skip </Text>
		</View>
	);
}

export default Loading;
