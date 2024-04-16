import React from 'react';
import { ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../StyleSheet.js'; // corrected import

export const ParkingSpots = ({ navigation }) => {

    return(
        <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.container}></View>
                <View style={styles.container}>
                    <Image source={require('../assets/transparent_icon.png')} style={styles.logo}/>
                    <Text style={styles.loginText}>My Parking Spots</Text>
                </View>
                <View style={{flexDirection:'row',  ...styles.container}}>
                    <TouchableOpacity style={{...styles.leftContainer, ...styles.parkingButton}} onPress={() => navigation.navigate('SaveParking')}>
                        <Text style={styles.parkingButtonText}>Save Parking Spot</Text>
                    </TouchableOpacity>
                    <Image source={require('../images/exclamation.png')} style={styles.exIcon}/>
                    <Image source={require('../images/camera-01.png')} style={styles.cameraIcon}/>
                </View>
                <View style={{flexDirection:'row', ...styles.container}}>
                    <TouchableOpacity onPress={() => navigation.navigate('AssignedParking')} style={{...styles.leftContainer, ...styles.parkingButton}}>
                        <Text style={styles.parkingButtonText}>Get Assigned Parking</Text>
                    </TouchableOpacity>
                    <Image source={require('../images/exclamation.png')} style={styles.exIcon}/>
                    <Image source={require('../images/camera-01.png')} style={styles.cameraIcon}/>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('SavedParkingList')} style={styles.parkingButton}>
                    <Text style={styles.parkingButtonText}>Open Previously Saved Parking Spots</Text>
                </TouchableOpacity>
                <View style={styles.container}></View>

                <TouchableOpacity onPress={() => navigation.navigate('Support')} style={styles.contactContainer}>
                    <Image source={require('../images/si.png')} style={styles.supportIcon} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default ParkingSpots;