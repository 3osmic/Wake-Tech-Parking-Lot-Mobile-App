// DrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { styles } from '../StyleSheet';

const DrawerContent = ({ navigation, drawerRef }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const email = user.email;
  const username = user.displayName;

  const Logout = () => {
    signOut(auth).then(() => {
      console.log('signout successful');
      navigation.navigate('Login');
    }).catch((error) => {
      console.log('signout unsuccessful');
    });
  };

  return (
    <View style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Image source={require('../images/default-pfp.png')} style={styles.defaultIcon} />
        <Text style={styles.drawerTitle}>Hi, {username}!</Text>
        <Text style={styles.drawerSubtext}>{user.email}</Text>
      </View>
      <View style={styles.drawerContainer}>
        <TouchableOpacity style={styles.drawerButtons} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.drawerItems}>Profile</Text>
        </TouchableOpacity>
        <View style={styles.drawerSeperator}/>
        <TouchableOpacity style={styles.drawerButtons} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.drawerItems}>Settings</Text>
        </TouchableOpacity>
        <View style={styles.drawerSeperator}/>
          <TouchableOpacity style={styles.drawerButtons} onPress={() => Logout()}>
            <Text style={styles.drawerItems}>Logout</Text>
          </TouchableOpacity>
        <View style={styles.drawerSeperator}/>
      </View>
    </View>
  );
};

export default DrawerContent;
