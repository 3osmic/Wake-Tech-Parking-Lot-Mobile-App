import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Payments = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigation = useNavigation();

  const handleCardSelection = (cardType) => {
    setSelectedCard(cardType);
  };

  const handleMakePayment = () => {
    navigation.navigate('MakePayment');
  };

  return (
    <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../assets/transparent_icon.png')} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Payments</Text>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.mainHeader}>Select a Card</Text>
          <Text style={styles.subText}>Tap to select a card from below</Text>
          <View style={styles.cardOptions}>
            <TouchableOpacity
              style={[styles.cardOption, selectedCard === 'Mastercard' && styles.selectedCard]}
              onPress={() => handleCardSelection('Mastercard')}
            >
              <Image source={require('../assets/mastercard.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>Mastercard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardOption, selectedCard === 'Discover' && styles.selectedCard]}
              onPress={() => handleCardSelection('Discover')}
            >
              <Image source={require('../assets/discover.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>Discover</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardOption, selectedCard === 'Visa' && styles.selectedCard]}
              onPress={() => handleCardSelection('Visa')}
            >
              <Image source={require('../assets/visa.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>Visa</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.makePaymentButton} onPress={handleMakePayment}>
          <Text style={styles.buttonText}>Make Payment Now</Text>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
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
    fontStyle: 'italic',
  },
  cardContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#BEBEBE',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardOptions: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#B0E0E6',
    marginBottom: 10,
    width: '100%',
  },
  selectedCard: {
    backgroundColor: 'green',
  },
  cardImage: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  makePaymentButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Payments;
