import { SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import SearchBar from '../src/components/SearchBar';
import PopularTopics from '../src/components/PopularTopics';
import Logo from '../src/components/Logo';


const SupportPage = () => {
    const handleSubmit=(searchQuerry)=>{
        console.log(`Do a search with: ${searchQuerry}`);
    }
  return (
    <ImageBackground source={require('../assets/bg2.png')} style={customStyles.backgroundImage}>
        <SafeAreaView style={customStyles.viewContainer}>
            <Logo />
            <SearchBar onSearch={handleSubmit} />
            <PopularTopics />
        </SafeAreaView>
    </ImageBackground>
  )
}


export default SupportPage

const customStyles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent:"flex-start",
        resizeMode: "cover",
     
    },
    centereItems: {
        alignItems: 'center',
    },
    viewContainer: {
        zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.7)',
        resizeMode: "cover",
        height: '90%',
        marginTop: 40,
        padding: 20,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor:'yellow',
        zIndex: 100,
       
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    });