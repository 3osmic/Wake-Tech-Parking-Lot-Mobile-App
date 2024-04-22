import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet';
import { parkingSpot, getCampus, getPrice } from '../components/parking.js';

const savedParkingSpots = [];

const SavedParkingList = ({ navigation, route }) => {
  const spot = parkingSpot;
  if (route.params){
    savedParkingSpots.push(spot);
  }

  return (
    <ImageBackground source={require('../assets/bg2.png')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={styles.ParkingListContainer}>
      <Text style={styles.ParkingListTitle}>Saved Parking Spots:</Text>
    <ScrollView>
      <View>
        {savedParkingSpots.map((space, index) =>(
          <Text style={styles2.item} key={index}>
            Parking Space ID: #{space} Campus: {getCampus(space)} Price: ${getPrice(space)}
          </Text>
        ))}
      </View>
    </ScrollView>
    </View>
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate('Parking')}>
        <Text style={styles.parkingButtonText}>Leave</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles2 = StyleSheet.create({
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
    backgroundColor: "white"
  }
});


export default SavedParkingList;
