import React from 'react';
import { StatusBar, ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './StyleSheet'; // Import the styles from StyleSheet.js

export default function ForgotPassword() {
  return (
    <ImageBackground source={require('./assets/Background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Same icon as App.js */}
        <Image source={require('./assets/transparent_icon.png')} style={styles.logo} />

        {/* Title for the forgot password screen */}
        <Text style={[styles.loginText, styles.centeredText]}>Forgot Password</Text>
        {/* Description */}
        <Text style={[styles.greyText, styles.centeredText]}>Enter your email to reset your password.</Text>

        {/* Email input field */}
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          fontWeight={'bold'}
        />

        {/* Reset Password Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>RESET PASSWORD</Text>
        </TouchableOpacity>

        {/* Go back to login link */}
        <View style={styles.signUpLink}>
          <TouchableOpacity><Text style={styles.signUpText}>Back to Login</Text></TouchableOpacity>
        </View>

        {/* Status Bar */}
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}