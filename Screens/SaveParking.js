import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, ImageBackground, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet.js';
import { useNavigation } from '@react-navigation/native';
import { CameraView, useCameraPermissions } from 'expo-camera/next';

export const SaveParking = ({ navigation }) => {
  const [status, requestPermissions] = useCameraPermissions();
  const [scanData, setScanData] = useState();

  useEffect(() => {
    if (!status?.granted) requestPermissions();
    setScanData(undefined);
    }, []);

    if (status === undefined) {
      return <Text>Requesting permissions...</Text>
    } else if (!status) {
      return <Text>Permission for camera not granted. Please change this in settings.</Text>
    }

    const handleBarCodeScanned = ({type, data}) => {
      setScanData(data);
      console.log(`Data: ${data}`);
      console.log(`Type: ${type}`);

      navigation.navigate("PreviousParking", data);
    };

    
    return (
      <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Parking')}>
                <Image source={require('../assets/back_arrow.png')} style={styles2.navIcon} />
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <Image source={require('../assets/transparent_icon.png')} style={styles.logo}/>
            <Text style={[styles.loginText]}>Save Parking Spot</Text>
        </View>
        <View style={styles.leftContainer}>
            <CameraView style={styles2.camera}
            barcodeScannerSettings={{barcodeTypes: ["qr"],}}
            onBarcodeScanned={scanData ? undefined : handleBarCodeScanned}>
            </CameraView>
            </View>
        <View style={styles.container}>    
           
        </View>
        </ImageBackground>
    );
};
const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      fontWeight: 'bold',
      color: 'white',
    },
    navIcon: {
      marginTop: 25,
      width: 50,
      height: 25,
      marginLeft: 10,
    },
  });

export default SaveParking;