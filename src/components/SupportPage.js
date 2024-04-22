import React from 'react';
import { FlatList,StyleSheet,View, TouchableOpacity, ImageBackground, Image,Text, Linking,TextInput,SafeAreaView } from 'react-native';
import { styles } from '../../StyleSheet';
import icon from '../../assets/icon.png';
import tw from 'tailwind-react-native-classnames';
import Ionicons from "react-native-vector-icons/Ionicons";

const data = [
  {
    id: "e3ea462e-032e-404f-ae2a-2170f7685bd1",
    title: "Get Started",
    icon: "ios-home-outline",
    screen: "GetStartedScreen",
  },
  {
    id: "57a4fcc6-bb20-4602-9893-ec4686c33f7c",
    title: "find a parking spot",
    icon: "ios-settings-outline",
    screen: "NavigationScreen",
  },
  {
    id: "385c9cd1-7ab7-4e39-9505-88f9ffb7a0e2",
    title: "privacy,safety and security",
     icon: "ios-add",
    screen: "PrivacyScreen",
  },
  {
    id: "385c9cd1-7ab7-4e39-9505-88f9ffb7a0e2",
    title: "Community",
     icon: "ios-add",
    screen: "PrivacyScreen",
  },
    {
        id: "385c9cd1-7ab7-4e39-9505-88f9ffb7a0e2",
        title: "Accessibility",
         icon: "ios-add",
        screen: "PrivacyScreen",
    },
    {
        id: "385c9cd1-7ab7-4e39-9505-88f9ffb7a0e2",
        title: "Accessibility",
         icon: "ios-add",
        screen: "PrivacyScreen",
    },
    {
        id: "385c9cd1-7ab7-4e39-9505-88f9ffb7a0e2",
        title: "Accessibility",
         icon: "ios-add",
        screen: "PrivacyScreen",
    },
    {
        id: "385c9cd1-7ab7-4e39-9505-88f9ffb7a0e2",
        title: "Accessibility",
         icon: "ios-add",
        screen: "PrivacyScreen",
    },
    {
        id: "385c9cd1-7ab7-4e39-9505-88f9ffb7a0e2",
        title: "Accessibility",
         icon: "ios-add",
        screen: "PrivacyScreen",
    },
    {
        id: "385c9cd1-7ab7-4e39-9505-88f9ffb7a0e2",
        title: "Accessibility",
         icon: "ios-add",
        screen: "PrivacyScreen",
    },
    {
        id: "385c9cd1-7ab7-4e39-9505-88f9ffb7a0e2",
        title: "Accessibility",
         icon: "ios-add",
        screen: "PrivacyScreen",
    },
    {
        id: "385c9cd1-7ab7-4e39-9505-88f9ffb7a0e2",
        title: "Accessibility",
         icon: "ios-add",
        screen: "PrivacyScreen",
    },
    {
        id: "385c9cd1-7ab7-4e39-9505-88f9ffb7a0e2",
        title: "Accessibility",
         icon: "ios-add",
        screen: "PrivacyScreen",
    },
];

const SupportPage = () => {
  return (
    <ImageBackground source={require('../../assets/Background.jpg')} style={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity >
                    <Image source={icon} style={customStyles.logo} />
                </TouchableOpacity>
            </View>
            <TextInput
                style={tw`border-2 border-gray-300 w-400 h-10 p-2 mt-4 rounded-md bg-white`}
                placeholder="Search Help Center"
            />
            <View style={ [{backgroundColor:'white', opacity:0.8}]}>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
        
            renderItem={({item}) => (
            <TouchableOpacity style={[tw`p-2 pl-2 pb-2 pt-4 bg-gray-5 m-2 w-80`]}>
                <Text style={[tw`mt-2 text-sm font-semibold`]}>{item.title}</Text>
                
            </TouchableOpacity>
            )}
            />
            </View>
        </SafeAreaView>  
        </ImageBackground>
   
  )
}

const customStyles = StyleSheet.create({
    logo: {
        position: 'relative',
        width: 80,
        height: 80,
        borderRadius: 100,
        marginBottom: 20,
        top:60,
    },
    });

export default SupportPage
