import React from 'react';
import { StatusBar, ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './StyleSheet';

export default function ForgotPassword() {
  const navigation = useNavigation();
  
  const handleBackToLogin = () => {
    navigation.navigate('Login'); // Navigate back to the 'Login' screen
  };

  return (
    <ImageBackground source={require('./assets/Background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToLogin}>
          <Image source={require('./assets/back_arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Image source={require('./assets/transparent_icon.png')} style={styles.logo} />

        <Text style={[styles.greyText, styles.centeredText]}>Enter your email to reset your password.</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          fontWeight={'bold'}
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>RESET PASSWORD</Text>
        </TouchableOpacity>

        <View style={styles.signUpLink}>
          <TouchableOpacity onPress={handleBackToLogin}><Text style={styles.signUpText}>Back to Login</Text></TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}