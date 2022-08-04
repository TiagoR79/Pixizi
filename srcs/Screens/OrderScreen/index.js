import React, { useState } from 'react';
import { View, Text, /* Button ,*/ ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/base';
import Modal from "react-native-modal";

const OrderScreen = ({ navigation }) => {


	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: '92%', width: '100%', backgroundColor: 'white', padding:10 }}>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                    <TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.goBack()}>
                        <Image source={require('../../../assets/back.png')} style={{ width: 30, height: 30, marginLeft: '9%' }} />
                    </TouchableOpacity>
                    <Text style={{marginLeft: '11%', fontSize: 20, fontWeight: 'bold', color: 'black'}} >Order Photographer</Text>
                </View>
                <Image source={require('../../../assets/imgs/tbelem.png')} style={{ height:150, width:150, marginBottom: 10, alignSelf: 'center'}}/>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 20 }}>
                    <Text 
                        style={{ 
                            color: 'black', fontSize: 16, fontWeight: 'bold', color: 'black', letterSpacing: 1 
                        }}>Spot:</Text>
                    <Text 
                        style={{ 
                            color: '#00d4aaff', fontSize: 16, fontWeight: 'bold', letterSpacing: 1 
                        }}>Torre de Belém</Text>
                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 20 }}>
                    <Text 
                        style={{ 
                            color: 'black', fontSize: 16, fontWeight: 'bold', color: 'black', letterSpacing: 1 
                        }}>Session:</Text>
                    <Text 
                        style={{ 
                            color: '#00d4aaff', fontSize: 16, fontWeight: 'bold', letterSpacing: 1 
                        }}>30min</Text>
                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 20 }}>
                    <Text 
                        style={{ 
                            color: 'black', fontSize: 16, fontWeight: 'bold', color: 'black', letterSpacing: 1 
                        }}>Photos:</Text>
                    <Text 
                        style={{ 
                            color: '#00d4aaff', fontSize: 16, fontWeight: 'bold', letterSpacing: 1 
                        }}>20</Text>
                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 20 }}>
                    <Text 
                        style={{ 
                            color: 'black', fontSize: 16, fontWeight: 'bold', color: 'black', letterSpacing: 1 
                        }}>Price:</Text>
                    <Text 
                        style={{ 
                            color: '#00d4aaff', fontSize: 16, fontWeight: 'bold', letterSpacing: 1 
                        }}>16€</Text>
                </View>
            </View>
			<View style={{ height: '8%', width: '100%' , backgroundColor: '#00d4aaff' }}>
				<Button
					title="Confirm"
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

export default OrderScreen;
