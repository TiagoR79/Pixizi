import * as React from 'react';
import { View, Text, /* Button ,*/ ImageBackground, Image } from 'react-native';
import { Button } from '@rneui/base';

//const img = { uri: "https://cdn.discordapp.com/attachments/958318179229257789/1002129999559675924/background.png" };
//../../../assets/imgs/background.png

function LoginScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<View style={{ height: '92%', width: '100%' }}>
				<ImageBackground source={require('../../../assets/imgs/background.png')} resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
					<Image source={require('../../../assets/logo/logo2.png')} style={{ width: 150, height: 150, alignSelf: 'center' }}/>

				</ImageBackground>
			</View>
			<View style={{ height: '8%', width: '100%' , backgroundColor: '#00d4aaff' }}>
				<Button
					title="Home"
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
					onPress={() => navigation.navigate('Home')}
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
