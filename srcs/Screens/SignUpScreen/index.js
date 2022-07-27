import * as React from 'react';
import { View, Text, Button } from 'react-native';

function SignUpScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>SignUpScreen</Text>
			<Button
				title="home"
				color="#00d4aaff"
				onPress={() => navigation.navigate('Home')}
			/>
		</View>
	);
}

export default SignUpScreen;
