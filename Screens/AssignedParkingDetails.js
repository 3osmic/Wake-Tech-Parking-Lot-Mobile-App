import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AssignedParkingDetails = ({ route }) => {
    const { space, time } = route.params;
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // Update the current time every second
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    const handleSaveParking = async () => {
        try {
            const parkingDetails = { space, time };
            await AsyncStorage.setItem('assignedParking', JSON.stringify(parkingDetails));
            Alert.alert('Success', 'Assigned parking details saved.');
        } catch (error) {
            console.error('Error saving assigned parking details:', error);
        }
    };

    return (
        <ImageBackground source={require('../assets/bg2.png')} style={styles.background}>
            <View style={styles.container}>
                <Image source={require('../assets/transparent_icon.png')} style={styles.wpIcon} />
                <Text style={styles.title}>Assigned Parking Details</Text>
                <Text style={styles.spaceText}>Parking Space: {space}</Text>
                <Text style={styles.spaceText}>Time to Claim: {time}</Text>
                
                <View style={styles.note}>
                    <Text style={styles.noteText}>Note: You can view your assigned parking spaces on the "My Parking Spots" page</Text>
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={handleSaveParking}>
                    <Text style={styles.saveButtonText}>Save Assigned Parking</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wpIcon: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    spaceText: {
        fontSize: 16,
        marginBottom: 10,
    },
    note: {
        padding: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    noteText: {
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    saveButton: {
        backgroundColor: '#1d4f7e',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default AssignedParkingDetails;
