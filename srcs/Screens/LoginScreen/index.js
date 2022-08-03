import React, { useState } from 'react';
import { View, Text, /* Button ,*/ ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/base';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../../utils/UserPool';

//const img = { uri: "https://cdn.discordapp.com/attachments/958318179229257789/1002129999559675924/background.png" };
//../../../assets/imgs/background.png

const LoginScreen = ({ navigation }) => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const onSubmit = () => {
		console.log("hello");
		const user = new CognitoUser({
			Username: email,
			Pool: UserPool
		});

		const authDetails = new AuthenticationDetails({
			Username: email,
			Password: password
		});

		user.authenticateUser(authDetails, {
			onSuccess: (data) => {
				console.log("onSuccess: ", data);
				navigation.navigate("Home");
			},
			onFailure: (err) => {
				console.error("onFailure: ", err);
			},
			newPasswordRequired: (data) => {
				console.log("newPasswordRequired: ", data);
			},
		});
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<View style={{ height: '92%', width: '100%' }}>
				<ImageBackground source={require('../../../assets/imgs/background.png')} resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
					<Image source={require('../../../assets/logo/logo2.png')} style={{ width: 150, height: 150, alignSelf: 'center' }}/>
					<TextInput
						style={{ backgroundColor: 'white', width: '70%', alignSelf: 'center', marginTop: 20, borderRadius: 30, textAlign: 'center' }}
						placeholder="email"
						onChangeText={newEmail => setEmail(newEmail)}
					/>
					<TextInput
						style={{ backgroundColor: 'white', width: '70%', alignSelf: 'center', marginTop: 10, borderRadius: 30, textAlign: 'center' }}
						placeholder="password"
						secureTextEntry={true}
						onChangeText={newPassword => setPassword(newPassword)}
					/>
					<View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '70%', alignSelf: 'center', fontWeight: '500' }}>
						<TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.navigate('Home')}>
							<Text style={{ color: '#00d4aaff', fontWeight: '500', fontSize: 15 }} >Forgot Password?</Text>
						</TouchableOpacity>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Text style={{ color: 'white', fontWeight: '500', fontSize: 15 }}>New User?</Text>
							<TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.navigate('SignUp')}>
								<Text style={{ color: '#00d4aaff', fontWeight: '500', fontSize: 15 }} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
			</View>
			<View style={{ height: '8%', width: '100%' , backgroundColor: '#00d4aaff' }}>
				<Button
					title="Sign in"
					loading={false}
					loadingProps={{ size: 'small', color: 'white' }}
					buttonStyle={{
						backgroundColor: '#00d4aaff',
						borderRadius: 0,
					}}
					titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
					containerStyle={{
						margin: 0,
						height: '100%',
						width: '100%'
					}}
					onPress={onSubmit}
				/>
				{/* <Button
					title="home"
					color="#00d4aaff"
					onPress={() => navigation.navigate('Home')}
				/> */}
			</View>
		</View>
	);
}

export default LoginScreen;
