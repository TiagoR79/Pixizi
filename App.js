// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen from './srcs/Screens/LoadingScreen';
import HomeScreen from './srcs/Screens/HomeScreen';
import LoginScreen from './srcs/Screens/LoginScreen';
import SignUpScreen from './srcs/Screens/SignUpScreen';
import DetailsScreen from './srcs/Screens/DetailsScreen';


const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home"
				screenOptions={{
					headerStyle: {
					  backgroundColor: '#00d4aaff',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
					  fontWeight: 'bold',
					},
					headerBackButtonMenuEnabled: false,
					headerBackVisible: false,
					title: ''
				  }}
			>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
				/>
				<Stack.Screen
					name="Loading"
					component={LoadingScreen}
					/>
				<Stack.Screen name="Details" component={DetailsScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="SignUp" component={SignUpScreen} />
				{/* <Stack.Screen name="" component={} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
