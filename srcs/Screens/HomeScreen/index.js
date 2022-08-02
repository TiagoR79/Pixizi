import * as React from 'react';
import { View, Text, /* Button ,*/ ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/base';

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<View style={{ height: '92%', width: '100%' }}>
				<ImageBackground source={require('../../../assets/imgs/map.png')} resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
					<TouchableOpacity activeOpacity={ .7 } onPress={() => alert('pressed')}>
						<Image
							source={require('../../../assets/spot.png')}
							style={{
								width: 150,
								height: 150,
								alignSelf: 'center',
								marginTop: 300
							}}
						/>
					</TouchableOpacity>
				</ImageBackground>
			</View>
			<View style={{ height: '8%', width: '100%' , backgroundColor: '#00d4aaff' }}>
				<Button
					title="Order"
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

export default HomeScreen;
