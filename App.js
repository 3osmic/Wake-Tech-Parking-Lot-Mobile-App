import React from 'react';
import { StatusBar, ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './StyleSheet';
import ForgotPassword from './Forgot-Password'; // Import the ForgotPassword component

// Creating a stack navigator
const Stack = createStackNavigator();

// The Main App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Login screen component
function LoginScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/Background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('./assets/transparent_icon.png')} style={styles.logo} />
        <Text style={[styles.greyText, styles.centeredText]}>Please sign in to continue.</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          fontWeight={'bold'}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotText}>FORGOT</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.signUpLink}>
          <Text style={styles.centeredText}>Don't have an account? </Text>
          <TouchableOpacity><Text style={styles.signUpText}>Sign up</Text></TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}