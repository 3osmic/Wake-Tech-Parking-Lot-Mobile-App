import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, ImageBackground, Image, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet.js'; // corrected import
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { parkingSpot, getLatitude, getLongitude } from '../components/parking.js';

export const Navigation = ({ navigation }) => { // destructuring navigation from props
    const [location, setLocation] = useState(null);
    const [parkingLat, setParkingLat] = useState(0);
    const [parkingLong, setParkingLong] = useState(0);
    const { width, height } = Dimensions.get("window");
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.5;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);

          if (parkingSpot !== undefined) {
            let latitude = getLatitude(parkingSpot);
            let longitude = getLongitude(parkingSpot);
            console.log(latitude);
            console.log(longitude);
            setParkingLat(latitude);
            setParkingLong(longitude);
          }
        })();
      }, []);


    return (
        <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
        <View style={styles2.container}>
            <Image source={require('../assets/transparent_icon.png')} style={styles.logo}/>
            <Text style={[styles.loginText]}>Your parking space is marked, select it to enter google maps</Text>
        </View>
        <View style={{flex: 4}}>
            <MapView
                style={styles2.map} 
                initialRegion={{
                    latitude: 35.80685706956246,
                    longitude: -78.65431314215556,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
                showsUserLocation={true}
            >
                <Marker
                    coordinate={{
                        latitude: parkingLat,
                        longitude: parkingLong,
                    }}
                    title='Parking Spot'
                ></Marker>
            </MapView>
        </View>


        <View style={styles.container}>    

        </View>
        </ImageBackground>
    );
};

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 50,
      },
      map: {
        width: '100%',
        height: '100%',
        marginTop: 45,
      },
});

export default Navigation;