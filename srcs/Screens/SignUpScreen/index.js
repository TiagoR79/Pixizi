import React, { useState } from 'react';
import { View, Text, /* Button ,*/ ImageBackground, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/base';
import UserPool from '../../utils/UserPool';

const SignUpScreen = ({ navigation }) => {
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const onSubmit = () => {
		UserPool.signUp(email, password, [], null, (err, data) => {
			if(err) {
				console.log(err);
				alert(err);
			}
			else {
				navigation.navigate('Login');
			}
			console.log(data);
		});
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<View style={{ height: '92%', width: '100%', backgroundColor: 'white' }}>
				<View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
					<TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.goBack()}>
						<Image source={require('../../../assets/back.png')} style={{ width: 35, height: 35 }} />
					</TouchableOpacity>
					<Text style={{ marginLeft: 85, fontSize: 25, fontWeight: 'bold', color: 'black' }}>Sign Up</Text>
				</View>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<Image source={require('../../../assets/photo.png')} style={{ width: 120, height: 120, alignSelf: 'center' }}/>
					<Text>Add Photo</Text>
				</View>
				<View style={{  }}>
					<TextInput
						style={styles.input}
						placeholder="Email"
						value={email}
						onChangeText={newEmail => setEmail(newEmail)}
						placeholderTextColor={'black'}
					/>
					<TextInput
						style={styles.input}
						placeholder="Password"
						secureTextEntry={true}
						value={password}
						onChangeText={newPassword => setPassword(newPassword)}
						placeholderTextColor={'black'}
					/>
					{/* <TextInput
						style={styles.input}
						placeholder="Retype Password"
						secureTextEntry={true}
						placeholderTextColor={'black'}
					/>
					<TextInput
						style={styles.input}
						placeholder="Name"
						placeholderTextColor={'black'}
					/>
					<TextInput
						style={styles.input}
						placeholder="Country"
						placeholderTextColor={'black'}
					/> */}
				</View>
			</View>
			<View style={{ height: '8%', width: '100%' , backgroundColor: '#00d4aaff' }}>
				<Button
					title="Sign up"
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
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		width: '80%',
		alignSelf: 'center',
		marginTop: 10,
		borderRadius: 0,
		textAlign: 'left',
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
	}
})

export default SignUpScreen;
