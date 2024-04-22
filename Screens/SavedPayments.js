import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import backArrow from '../assets/back_arrow.png';

const SavedPayments = ({ route }) => {
  const { lastFourDigits } = route.params;
  const navigation = useNavigation();

  const handleBackToHomepage = () => {
    navigation.navigate('Homepage'); 
  };

  const auth = getAuth();
  const user = auth.currentUser;

  const handleBackPress = () => {
      navigation.goBack(); // Go back to the previous screen
    };

  return (
    <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>

      <View style={styles.container1}>
        <View style={styles.parkingHeader}>
          <Image source={require('../images/default-pfp.png')} style={styles.image} />
          <Text style={styles.username}>{user.displayName}</Text>
        </View>
        <MaterialIcons name="notifications" size={30} color="#b9dbe3" />
      </View>

      <TouchableOpacity onPress={handleBackPress}>
        <Image source={backArrow} style={{ width: 30, height: 30 , margin: 20, marginBottom: -50}} />
      </TouchableOpacity>
    
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Saved Payment Methods</Text>
        </View>
        <View style={styles.cardContainer}>
          <Image source={require('../assets/mastercard.png')} style={styles.cardImage} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Mastercard ending with {lastFourDigits}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToHomepage}>
          <Text style={styles.backButtonText}>Back to Homepage</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    color: '#87CEFA',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
    marginRight: 20,
  },
  cardTextContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  backButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SavedPayments;
