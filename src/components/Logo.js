import { StyleSheet, Text,Image, View,TouchableOpacity } from 'react-native'
import React from 'react'
import splash from '../../assets/icon.png';

const Logo = () => {
  return (
    <TouchableOpacity style={customStyles.logoContainer}>
         <Image source={splash} style={customStyles.miniLogo} />
    </TouchableOpacity>
  )
}

export default Logo

const customStyles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
       
    },
    miniLogo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor:'yellow',
        zIndex: 200,
        marginTop:10,
     
    },
})