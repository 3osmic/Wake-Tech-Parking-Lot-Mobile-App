import React, { useState } from 'react';
import { StatusBar, ImageBackground, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../StyleSheet';
import { auth, sendPasswordResetEmail } from '../database/firebase'; // Update the path accordingly
import { Alert } from 'react-native';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  const handleResetPassword = async () => {
    if (!email) {
      // Handle empty email case
      return;
    }

    try {
      // Send reset email from Firebase
      await sendPasswordResetEmail(auth, email);

      
    } catch (error) {
      // Handle error
      console.error('Error sending reset email:', error);
      Alert.alert('Error sending reset email. Please try again.');
    }
  };

  return (
    <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToLogin}>
          <Image source={require('../assets/back_arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={[styles.loginText, styles.centeredText]} >Forgot Password</Text>
        <Image source={require('../images/fgp_icon.png')} style={styles.fgpIcon} />

        <Text style={[styles.marginText, styles.centeredText]}>Enter Your Email To Receive A Code</Text>

        <TextInput
          style={styles.emailInput}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleResetPassword}>
          <Text style={styles.loginButtonText}>SEND</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}
