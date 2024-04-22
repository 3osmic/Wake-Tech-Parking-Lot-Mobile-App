import React from 'react';
import { StatusBar, ImageBackground, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth, signInWithEmailAndPassword } from '../database/firebase';
import { AntDesign } from '@expo/vector-icons';


// Need to be changed to the SignUpScreen Function (remove default)
export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      if (!email.trim() || !password.trim()) {
        console.error('Email and password are required.');
        return;
      }

      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // After successful login, you can navigate to the homepage
      navigation.navigate('HomePage');
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle login error
    }
  };
  
  return (
    <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../assets/transparent_icon.png')} style={styles.logo} />
        <Text style={[styles.loginText, styles.centeredText]}>Login</Text>
        <Text style={[styles.greyText, styles.centeredText]}>Please sign in to continue.</Text>

        {/* Email field */}
        <View style={styles.emailInputContainer}>
          <AntDesign name="mail" size={20} color="#9e9e9e" />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        {/* Password field */}
        <View style={styles.passwordInputContainer}>
          <AntDesign name="lock" size={20} color="#9e9e9e" />
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText} onPress={() => navigation.navigate('ForgotPassword')}>FORGOT</Text>
          </TouchableOpacity>
        </View>

        {/* Login button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            // Call the handleLogin function when the login button is pressed
            handleLogin();
          }}
        >
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signUpLink}>
          <Text style={styles.centeredText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text onPress={() => navigation.navigate("Signup")} style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Status Bar */}
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}