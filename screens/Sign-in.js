import React from 'react';
import { StatusBar, ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const SignInScreen = () => {
  return (
    // This is the Background Image
    <ImageBackground source={require('../assets/Background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* This is our App Logo */}
        <Image source={require('../assets/transparent_icon.png')} style={styles.logo} />

        {/* Login Text */}
        <Text style={[styles.loginText, styles.centeredText]}>Login</Text>
        {/* Please sign in to continue text */}
        <Text style={[styles.greyText, styles.centeredText]}>Please sign in to continue.</Text>

        {/* Username field thats actually inside the username box */}
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          // You can handle onChangeText event here
          onChangeText={(text) => console.log(text)}
          // This is just applying bold font style when the user typing
          fontWeight={'bold'}
        />

        {/* This is the Password Field */}
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            secureTextEntry={true}
            // You can handle onChangeText event here
            onChangeText={(text) => console.log(text)}
          />
          {/* The actual Forgot Password Button */}
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>FORGOT</Text>
          </TouchableOpacity>
        </View>

        {/* The LOGIN Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* This is the Sign Up Link */}
        <View style={styles.signUpLink}>
          {/* The Information Text under the log in button */}
          <Text style={styles.centeredText}>Don't have an account? </Text>
          {/* The Sign Up Button */}
          <TouchableOpacity><Text style={styles.signUpText}>Sign up</Text></TouchableOpacity>
        </View>

        {/* Status Bar */}
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

  {/* Everything under here is basically just formatting to make it look nice, think of it as css for react */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  greyText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    fontWeight: 'normal',
  },
  forgotButton: {
    paddingVertical: 10,
  },
  forgotText: {
    color: 'blue',
  },
  loginButton: {
    backgroundColor: 'black',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  centeredText: {
    textAlign: 'center',
  },
  signUpText: {
    color: 'blue',
  },
});

export default SignInScreen