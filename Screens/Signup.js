import React, { useState } from 'react';
import { StatusBar, ImageBackground, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../StyleSheet.js'; // corrected import
import { auth, createUserWithEmailAndPassword, updateProfile } from "../database/firebase";
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export const SignupScreen = () => {
  const navigation = useNavigation();

  const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim());
  };

  const isValidEmail = (value) => {
    const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regex.test(value);
  };

  const isValidPassword = (value) => {
    if (value.length < 8) {
      return false;
    }
    if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
      return false;
    }
    if (!/[^A-Za-z0-9]/.test(value)) {
      return false;
    }
    return true;
  };

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState('');

  const { username, email, password, confirmPassword } = userInfo;

  const [isSecureEntry1, setIsSecureEntry1] = useState(true);
  const [isSecureEntry2, setIsSecureEntry2] = useState(true);

  const handleOnChangeText = (value, fieldValue) => {
    setUserInfo({ ...userInfo, [fieldValue]: value });
  };

  const isValid = () => {
    if (!isValidObjField(userInfo)) return setError('All fields are required to proceed');
    if (!username.trim() || username.length < 3) return setError('Invalid username, username requires at least 3 characters');
    if (!isValidEmail(email)) return setError('Email is invalid');
    if (!password.trim() || !isValidPassword(password)) return setError('Password must be 8 characters long, with one upper and one lower case letter, and one special character.');
    if (password !== confirmPassword) return setError('Password does not match');

    return true;
  };

  const handleSignUp = async () => {
    if (isValid()) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(userCredential.user, {
          displayName: username,
        });

        console.log("User successfully signed up:", userCredential.user);
        setError('');

        navigation.navigate('HomePage');
      } catch (error) {
        setError(error.message);
        console.error("Firebase authentication error:", error);
      }
    }
  };

  return (
    <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>

      <View style={styles.container}>
        <Image source={require('../assets/transparent_icon.png')} style={styles.logo} />
        <Text style={[styles.loginText]}>Create Account</Text>
      </View>
      <View style={styles.leftContainer}>
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
        <View style={styles.userInputSignup}>
          <AntDesign name="user" size={20} color="#9e9e9e" />
          <TextInput
            style={styles.inputSignup}
            placeholder="Enter a Username"
            autoCapitalize='none'
            value={username}
            onChangeText={(value) => handleOnChangeText(value, 'username')}
          />
        </View>
        <View style={styles.userInputSignup}>
          <AntDesign name="mail" size={20} color="#9e9e9e" />
          <TextInput
            style={styles.inputSignup}
            placeholder='Enter an Email'
            autoCapitalize='none'
            value={email}
            onChangeText={(value) => handleOnChangeText(value, 'email')}
          />
        </View>
        {/* Show/Hide button for password */}
        <View style={styles.userInputSignup}>
          <AntDesign name="lock" size={20} color="#9e9e9e" />
          <TextInput
            style={styles.inputSignup}
            placeholder='Enter a Password'
            autoCapitalize='none'
            secureTextEntry={isSecureEntry1}
            value={password}
            onChangeText={(value) => handleOnChangeText(value, 'password')}
          />
          <TouchableOpacity
            style={styles.showHideButton}
            onPress={() => {
              setIsSecureEntry1((prev) => !prev);
            }}>
            <Text style={styles.showHideButtonText}>{isSecureEntry1 ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        </View>
        {/* Show/Hide button for re-enter password */}
        <View style={styles.userInputSignup}>
          <AntDesign name="lock" size={20} color="#9e9e9e" />
          <TextInput
            style={styles.inputSignup}
            placeholder='Re-enter Your Password'
            autoCapitalize='none'
            secureTextEntry={isSecureEntry2}
            value={confirmPassword}
            onChangeText={(value) => handleOnChangeText(value, 'confirmPassword')}
          />
          <TouchableOpacity
            style={styles.showHideButton}
            onPress={() => {
              setIsSecureEntry2((prev) => !prev);
            }}>
            <Text style={styles.showHideButtonText}>{isSecureEntry2 ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSignUp}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.signUpLink}>
          <Text>Already have an account? </Text>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate("Login")}
              style={styles.signUpText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;
