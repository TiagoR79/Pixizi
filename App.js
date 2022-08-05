// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen from './srcs/Screens/LoadingScreen';
import HomeScreen from './srcs/Screens/HomeScreen';
import LoginScreen from './srcs/Screens/LoginScreen';
import SignUpScreen from './srcs/Screens/SignUpScreen';
import DetailsScreen from './srcs/Screens/DetailsScreen';
import NavigationScreen from './srcs/Screens/NavigationScreen';
import OrderScreen from './srcs/Screens/OrderScreen';




const Stack = createNativeStackNavigator();

function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Loading"
				screenOptions={{
					headerStyle: {
					  backgroundColor: '#00d4aaff',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
					  fontWeight: 'bold',
					},
					headerBackButtonMenuEnabled: true,
					headerBackVisible: false,
					title: ''
				}}
			>
				<Stack.Screen
					name="Navigation"
					component={NavigationScreen}
					options={({navigation}) => ({
						headerLeft: () => (
							<TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.navigate('Navigation')}>
								<Image
									source={require('./assets/settings.png')}
									style={{ width: 27, height: 27 }}
								/>
							</TouchableOpacity>
						),
						headerRight: () => (
							<TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.navigate('Navigation')}>
								<Image
									source={require('./assets/profile.png')}
									style={{ width: 20, height: 25, marginRight: '55%' }}
								/>
							</TouchableOpacity>
						)
					})}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={({navigation}) => ({
						headerLeft: () => (
							<TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.navigate('Navigation')}>
								<Image
									source={require('./assets/settings.png')}
									style={{ width: 27, height: 27 }}
								/>
							</TouchableOpacity>
						),
						headerRight: () => (
							<TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.navigate('Navigation')}>
								<Image
									source={require('./assets/profile.png')}
									style={{ width: 20, height: 25, marginRight: '55%' }}
								/>
							</TouchableOpacity>
						)
					})}
					/>
				<Stack.Screen
					name="Loading"
					component={LoadingScreen}
					/>
				<Stack.Screen name="Details" component={DetailsScreen} />
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={({navigation}) => ({
						headerLeft: () => (
							<TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.navigate('Navigation')}>
								<Image
									source={require('./assets/settings.png')}
									style={{ width: 27, height: 27 }}
								/>
							</TouchableOpacity>
						)
					})}
					/>
				<Stack.Screen
					name="SignUp"
					component={SignUpScreen}
					options={({navigation}) => ({
						headerLeft: () => (
							<TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.navigate('Navigation')}>
								<Image
									source={require('./assets/settings.png')}
									style={{ width: 27, height: 27 }}
								/>
							</TouchableOpacity>
						)
					})}
				/>
				<Stack.Screen
					name="Order"
					component={OrderScreen}
					options={({navigation}) => ({
						headerLeft: () => (
							<TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.navigate('Navigation')}>
								<Image
									source={require('./assets/settings.png')}
									style={{ width: 27, height: 27 }}
								/>
							</TouchableOpacity>
						),
						headerRight: () => (
							<TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.navigate('Navigation')}>
								<Image
									source={require('./assets/profile.png')}
									style={{ width: 20, height: 25, marginRight: '55%' }}
								/>
							</TouchableOpacity>
						)
					})}
				/>
				{/* <Stack.Screen name="" component={} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
