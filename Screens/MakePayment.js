import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MakePayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const navigation = useNavigation();

  const handleCardNumberChange = (input) => {
    let formattedInput = input.replace(/\D/g, '');
    formattedInput = formattedInput.substring(0, 16);
    if (formattedInput.length > 0) {
      formattedInput = formattedInput.match(/.{1,4}/g).join('-');
    }
    setCardNumber(formattedInput);
  };

  const handleExpirationDateChange = (input) => {
    let formattedInput = input.replace(/\D/g, '');
    formattedInput = formattedInput.substring(0, 4);
    if (formattedInput.length > 2) {
      formattedInput = formattedInput.substring(0, 2) + '/' + formattedInput.substring(2);
    }
    setExpirationDate(formattedInput);
  };

  const handleConfirmPayment = () => {
    const lastFourDigits = cardNumber.slice(-4);
    navigation.navigate('SavedPayments', { lastFourDigits });
  };

  return (
    <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../assets/transparent_icon.png')} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Pay For Parking</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter card number"
            keyboardType="numeric"
            maxLength={19}
            value={cardNumber}
            onChangeText={handleCardNumberChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Expiration Date</Text>
          <TextInput
            style={styles.input}
            placeholder="MM/YY"
            keyboardType="numeric"
            maxLength={5}
            value={expirationDate}
            onChangeText={handleExpirationDateChange}
          />
        </View>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
          <Text style={styles.confirmText}>CONFIRM</Text>
        </TouchableOpacity>
        <Text style={styles.savedPaymentsLink} onPress={() => navigation.navigate('SavedPayments')}>
          Open Previously Saved Payments
        </Text>
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
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  confirmButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 40,
  },
  confirmText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  savedPaymentsLink: {
    textDecorationLine: 'underline',
    marginTop: 80,
  },
});

export default MakePayment;
