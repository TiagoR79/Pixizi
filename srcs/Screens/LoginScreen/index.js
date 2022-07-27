import * as React from 'react';
import { View, Text, Button } from 'react-native';

function LoginScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>login</Text>
			<Button
				title="home"
				color="#00d4aaff"
				onPress={() => navigation.navigate('Home')}
			/>
		</View>
	);
}

export default LoginScreen;
