import React from 'react';
import { View, Button, ImageBackground, Image, Text } from 'react-native';
import {styles} from '../StyleSheet.js'; // corrected import
import { saveSpot } from '../components/parking.js';

export const PreviousParking = ({ navigation, route }) => {

  const handleSave = () => {
    // Save parking spot data (e.g., to AsyncStorage or state management)
    // Navigate to SavedParkingListScreen and pass the saved parking spot data
    saveSpot(route.params);
    navigation.navigate('SavedParkingList', true);
  };

  const handleReturn = () => {
    navigation.navigate('Parking');
  }

  return (
    <ImageBackground
      source={require('../assets/bg2.png')} // Replace 'background.jpg' with your image file
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{justifyContent: 'center', alignItems: 'center' }}>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/transparent_icon.png')} style={styles.logo}/>
          <Text style={styles.loginText}>Would you like to confirm your choice?</Text>
        </View>
        <View>
          <Button title="Confirm" onPress={handleSave} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button title="Go back" onPress={handleReturn} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default PreviousParking;
