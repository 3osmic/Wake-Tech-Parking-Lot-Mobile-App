import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Alert, Image, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import backArrow from '../assets/back_arrow.png';

const ParkingSpaces = ({ navigation, route }) => {
    const { campus } = route.params; // Assuming campus is the value of the selected campus

    const parkingSpaces = {
        '1': {
            'Parking Space 1A': {
                image: require('../images/pinpoint.png'),
                link: 'https://www.google.com/maps/@35.6508437,-78.7047379,3a,75y,128.41h,68.33t/data=!3m6!1e1!3m4!1saPqErXdW7Zc-YjtcgqtmcQ!2e0!7i16384!8i8192?entry=ttu',
            },
            'Parking Space 1B': {
                image: require('../images/pinpoint.png'),
                link: 'https://www.google.com/maps/@35.6505274,-78.7045713,3a,75y,309.8h,82.33t/data=!3m6!1e1!3m4!1s8o2HBvRp-jgeb9HzlnfZ2g!2e0!7i16384!8i8192?entry=ttu',
            },
            'Parking Space 1C': {
                image: require('../images/pinpoint.png'),
                link: 'https://www.google.com/maps/@35.6506127,-78.7045477,3a,75y,310.92h,77.4t/data=!3m6!1e1!3m4!1sNUtpWm5vzAmtn4bWilrb7Q!2e0!7i16384!8i8192?entry=ttu',
            },
        },
        '2': {
            'Parking Space 2A': {
                image: require('../images/pinpoint.png'),
                link: 'https://www.google.com/maps/@35.8658929,-78.5453549,3a,75y,211.57h,79.57t/data=!3m6!1e1!3m4!1sOZDJAfPLtxDlZX_qSQ9dBQ!2e0!7i16384!8i8192?entry=ttu',
            },
            'Parking Space 2B': {
                image: require('../images/pinpoint.png'),
                link: 'https://www.google.com/maps/@35.8658431,-78.5452485,3a,75y,221.98h,71.33t/data=!3m6!1e1!3m4!1sEtCA6X9kINn5ZpJ9Kz3vhA!2e0!7i16384!8i8192?entry=ttu',
            },
            'Parking Space 2C': {
                image: require('../images/pinpoint.png'),
                link: 'https://www.google.com/maps/@35.8657951,-78.5451452,3a,75y,208.11h,66.71t/data=!3m6!1e1!3m4!1sYHN8JFMrdBv32GX3JxfG6Q!2e0!7i16384!8i8192?entry=ttuhttps://example.com/campus2-space2C',
            },
        },
        '3': {
            'Parking Space 3A': {
                image: require('../images/pinpoint.png'),
                link: 'https://www.google.com/maps/place/Wake+Technical+Community+College+-+Western+Wake+Campus/@35.7059297,-78.7947531,3a,75y,113.07h,84.52t/data=!3m6!1e1!3m4!1sG4QesESCIjEZjsVUhLgY6w!2e0!7i13312!8i6656!4m14!1m7!3m6!1s0x89ac8d02d6508d63:0xaa2b5e3e0a908be3!2sWake+Technical+Community+College+-+Western+Wake+Campus!8m2!3d35.7059084!4d-78.7955089!16s%2Fg%2F1tfgf2zp!3m5!1s0x89ac8d02d6508d63:0xaa2b5e3e0a908be3!8m2!3d35.7059084!4d-78.7955089!16s%2Fg%2F1tfgf2zp?entry=ttu',
            },
            'Parking Space 3B': {
                image: require('../images/pinpoint.png'),
                link: 'https://www.google.com/maps/place/Wake+Technical+Community+College+-+Western+Wake+Campus/@35.7060117,-78.7947149,3a,75y,81.27h,81.06t/data=!3m6!1e1!3m4!1s_MVSFBJTWkOJrEPuThY9vg!2e0!7i13312!8i6656!4m14!1m7!3m6!1s0x89ac8d02d6508d63:0xaa2b5e3e0a908be3!2sWake+Technical+Community+College+-+Western+Wake+Campus!8m2!3d35.7059084!4d-78.7955089!16s%2Fg%2F1tfgf2zp!3m5!1s0x89ac8d02d6508d63:0xaa2b5e3e0a908be3!8m2!3d35.7059084!4d-78.7955089!16s%2Fg%2F1tfgf2zp?entry=ttu',
            },
            'Parking Space 3C': {
                image: require('../images/pinpoint.png'),
                link: 'https://www.google.com/maps/@35.7061807,-78.7948771,3a,75y,14.15h,71.76t,0r/data=!3m6!1e1!3m4!1sKevJcPsO2IezOqQEv_AcgQ!2e0!7i13312!8i6656?entry=ttu',
            },
        },
    };

    const [isAssignPopupVisible, setIsAssignPopupVisible] = useState(false);
    const [selectedSpace, setSelectedSpace] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [hasPreviewed, setHasPreviewed] = useState(false);
    

    const handleParkingSpacePress = (space) => {
        const { link } = parkingSpaces[campus][space];
        if (link) {
            if (!hasPreviewed) {
                Linking.openURL(link);
                setHasPreviewed(true);
            } else {
                Alert.alert(
                    'Assign Parking Space',
                    `Do you want to get assigned to ${space}?`,
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                        },
                        {
                            text: 'Preview Again',
                            onPress: () => {
                                Linking.openURL(link);
                            },
                        },
                        {
                            text: 'Yes',
                            onPress: () => {
                                setSelectedSpace(space);
                                setIsAssignPopupVisible(true);
                            },
                        },
                    ],
                    { cancelable: true }
                );
            }
        } else {
            alert(`No link available for ${space}`);
        }
    };

    const handleAssignSpace = () => {
        setIsAssignPopupVisible(false);
        navigation.navigate('AssignedParkingDetails', { space: selectedSpace, time: selectedTime });
    };

    const auth = getAuth();
    const user = auth.currentUser;

    const handleBackPress = () => {
        navigation.goBack(); // Go back to the previous screen
      };

    return (
        <ImageBackground source={require('../assets/bg2.png')} style={styles.background}>

            <View style={styles.container1}>
                <View style={styles.parkingHeader}>
                    <Image source={require('../images/default-pfp.png')} style={styles.image} />
                    <Text style={styles.username}>{user.displayName}</Text>
                </View>
                <MaterialIcons name="notifications" size={30} color="#b9dbe3" />
            </View>

            <TouchableOpacity onPress={handleBackPress}>
                <Image source={backArrow} style={{ width: 30, height: 30 , margin: 20, marginBottom: -40}} />
            </TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.title}>Parking Spaces for Option {campus}</Text>
                {Object.keys(parkingSpaces[campus]).map((space, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.parkingSpace}
                        onPress={() => handleParkingSpacePress(space)}
                    >
                        <Image source={parkingSpaces[campus][space].image} style={styles.image1} />
                        <Text style={styles.spaceText}>{space}</Text>
                    </TouchableOpacity>
                ))}
                {isAssignPopupVisible && (
                    <View style={styles.popupContainer}>
                        <Text style={styles.popupText}>Select Time:</Text>
                        <Picker
                            selectedValue={selectedTime}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => setSelectedTime(itemValue)}
                            prompt="Select Time"
                        >
                            <Picker.Item label="10:00 AM" value="10:00 AM" />
                            <Picker.Item label="1:00 PM" value="1:00 PM" />
                            <Picker.Item label="2:30 PM" value="2:30 PM" />
                            <Picker.Item label="4:00 PM" value="4:00 PM" />
                        </Picker>
                        <TouchableOpacity style={styles.assignButton} onPress={handleAssignSpace}>
                            <Text style={styles.buttonText}>Assign</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container1: {
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    parkingSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image1: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    spaceText: {
        fontSize: 16,
    },
    popupContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    popupText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    picker: {
        width: 150,
        marginBottom: 20,
    },
    assignButton: {
        backgroundColor: '#1d4f7e',
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ParkingSpaces;
