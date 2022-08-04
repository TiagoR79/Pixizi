import React, { useState } from 'react';
import { View, Text, /* Button ,*/ ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/base';
import Modal from "react-native-modal";

const HomeScreen = ({ navigation }) => {

	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Modal 
				isVisible={isModalVisible} 
				/* animationIn='rubberBand' */ 
				/* animationInTiming={5000} */
			>
				<View style={{ backgroundColor: 'white', alignItems: 'center', padding:10 }}>
					<View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
						<TouchableOpacity activeOpacity={ .7 } onPress={toggleModal}>
							<Image source={require('../../../assets/back.png')} style={{ width: 30, height: 30 }} />
						</TouchableOpacity>
						<Text style={{marginLeft: '19%', fontSize: 20, fontWeight: 'bold', color: 'black'}} >Torre de Belém</Text>
					</View>
					<Image source={require('../../../assets/imgs/tbelem.png')} style={{ height:150, width:150, marginBottom: 10 }}/>
					<Text style={{ marginBottom: 10, fontSize: 15, fontWeight: 'bold', color: 'black', letterSpacing: 1, lineHeight: 25 }}>Medieval naval defense building from XVI century. Symbol of "The Manueline" arquitectural style</Text>
				</View>
			</Modal>
			<View style={{ height: '92%', width: '100%' }}>
				<ImageBackground source={require('../../../assets/imgs/map.png')} resizeMode="cover" style={{ flex: 1, justifyContent: 'center' }}>
					<TouchableOpacity activeOpacity={ .7 } onPress={toggleModal} style={{ marginTop: 300, width: 150, alignSelf: 'center', borderRadius: 70 }} >
						<Image
							source={require('../../../assets/spot.png')}
							style={{
								width: 150,
								height: 150,
								alignSelf: 'center'
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
			</View>
		</View>
	);
}

export default HomeScreen;
