import React, { useState } from 'react';
import { View, Text, /* Button ,*/ ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/base';
import Modal from "react-native-modal";

const SettingsScreen = ({ navigation }) => {


	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: '92%', width: '100%', backgroundColor: 'white', padding:10 }}>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                    <TouchableOpacity activeOpacity={ .7 } onPress={() => navigation.goBack()}>
                        <Image source={require('../../../assets/back.png')} style={{ width: 30, height: 30, marginLeft: '9%' }} />
                    </TouchableOpacity>
                    <Text style={{marginLeft: '20%', fontSize: 30, fontWeight: 'bold', color: 'black'}} >Settings</Text>
                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', paddingTop: 20, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: '#c4c4c4' }}>
                    <Text 
                        style={{ 
                            fontSize: 18, fontWeight: 'bold', color: 'black', letterSpacing: 1 
                        }}>Dark Mode</Text>
                    <Image source={require('../../../assets/toggleoff.png')} style={{ width: 46, height: 22 }} />
                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 20, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: '#c4c4c4' }}>
                    <Text 
                        style={{ 
                            fontSize: 18, fontWeight: 'bold', color: 'black', letterSpacing: 1 
                        }}>Language</Text>
                    <Text 
                        style={{ 
                            color: '#00d4aaff', fontSize: 16, fontWeight: 'bold', letterSpacing: 1 
                        }}>EN</Text>
                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 20, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: '#c4c4c4' }}>
                    <Text 
                        style={{ 
                            fontSize: 18, fontWeight: 'bold', color: 'black', letterSpacing: 1 
                        }}>Notifications</Text>
                    <Image source={require('../../../assets/toggleon.png')} style={{ width: 46, height: 22 }} />
                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 20, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: '#c4c4c4' }}>
                    <Text 
                        style={{ 
                            fontSize: 18, fontWeight: 'bold', color: 'black', letterSpacing: 1 
                        }}>Terms & Conditions</Text>
                    <Text 
                        style={{ 
                            color: '#00d4aaff', fontSize: 16, fontWeight: 'bold', letterSpacing: 1 
                        }}></Text>
                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 20, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: '#c4c4c4' }}>
                    <Text 
                        style={{ 
                            fontSize: 18, fontWeight: 'bold', color: 'red', letterSpacing: 1 
                        }}>Delete Account</Text>
                    <Text 
                        style={{ 
                            color: '#00d4aaff', fontSize: 16, fontWeight: 'bold', letterSpacing: 1 
                        }}></Text>
                </View>
                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', paddingTop: 20, paddingBottom: 10 /*, borderBottomWidth: 2, borderBottomColor: '#c4c4c4' */ }}>
                    <Text 
                        style={{ 
                            fontSize: 18, fontWeight: 'bold', color: 'black', letterSpacing: 1 
                        }}>Log Out</Text>
                    <Text 
                        style={{ 
                            color: '#00d4aaff', fontSize: 16, fontWeight: 'bold', letterSpacing: 1 
                        }}></Text>
                </View>
                
            </View>
			<View style={{ height: '8%', width: '100%' , backgroundColor: '#00d4aaff' }}>
				<Button
					title="Back"
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
					onPress={() => navigation.goBack()}
				/>
			</View>
		</View>
	);
}

export default SettingsScreen;