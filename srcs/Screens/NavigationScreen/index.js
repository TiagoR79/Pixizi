import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Home"
				color="#00d4aaff"
				onPress={() => navigation.navigate('Login')}
			/>
			<Button
				title="Go to Details"
				color="#00d4aaff"
				onPress={() => navigation.navigate('Details')}
			/>
			<Button
				title="Go to Loading"
				color="#00d4aaff"
				onPress={() => navigation.navigate('Loading')}
			/>
			<Button
				title="Go to Login"
				color="#00d4aaff"
				onPress={() => navigation.navigate('Login')}
			/>
			<Button
				title="Go to SignUp"
				color="#00d4aaff"
				onPress={() => navigation.navigate('SignUp')}
			/>
			<Button
				title="Go to Order"
				color="#00d4aaff"
				onPress={() => navigation.navigate('Order')}
			/>
		</View>
	);
}

export default HomeScreen;
