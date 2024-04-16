import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import { parkingSpot } from '../components/parking.js';

const Parking = ({ navigation }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    return (
        <ImageBackground
            source={require('../assets/bg2.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.parkingHeader}>
                    <Image source={require('../images/default-pfp.png')} style={styles.image} />
                    <Text style={styles.username}>{user.displayName}</Text>
                </View>
                <MaterialIcons name="notifications" size={30} color="#b9dbe3" />
            </View>

            <View style={styles.parkingSpots}>
                <Text style={styles.title}>My Parking Spots</Text>
                <View style={styles.miniContainers}>
                    <View style={styles.container1}>
                        <View style={styles.icons}>
                            <Image source={require('../images/camera-01.png')} style={styles.cameraIcon}/>
                            <Image source={require('../images/exclamation.png')} style={styles.exIcon}/>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('SaveParking')}>
                            <Text style={styles.parkingButtonText}>Save Parking Spot</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.icons}>
                            <Image source={require('../images/camera-01.png')} style={styles.cameraIcon}/>
                            <Image source={require('../images/exclamation.png')} style={styles.exIcon}/>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('AssignedParking')}>
                            <Text style={styles.parkingButtonText}>Get Assigned Parking</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container3}>
                        <TouchableOpacity onPress={() => navigation.navigate('SavedParkingList')}>
                            <Text style={styles.parkingButtonText}>Open Previously Saved Parking Spots</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        display: 'flex',
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
        backgroundColor: 'white',
    },
    parkingHeader: {
       flexDirection:"row",
       alignItems: 'center',
    },
    image: {
        width: 80, 
        height: 80, 
    },
    username: {
        marginLeft: 20,
        fontSize: 20,
    },
    parkingSpots: {
        margin: 20,
        marginTop: 40,
    },
    title: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    parkingButtonText: {
        marginLeft: 20,
        fontSize: 14,
        fontWeight: 'bold',
    },
    container1: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container2: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container3: {
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 20,
        marginTop: 30,
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
    },
    cameraIcon: {
        width: 50,
        height: 50,
    },
    exIcon: {
        width: 20,
        height: 20,
    },
});

export default Parking;