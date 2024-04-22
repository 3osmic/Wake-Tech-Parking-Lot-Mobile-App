import React, { useRef } from 'react';
import { View, ImageBackground, Image, TouchableOpacity, DrawerLayoutAndroid, Text } from 'react-native';
import { styles } from '../StyleSheet';
import { getAuth } from "firebase/auth";
import DrawerContent from './DrawerContent';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const email = user.email;
  const username = user.displayName;

  let drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };


  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition={'left'}
      drawerBackgroundColor={'#F5F5F5'}
      renderNavigationView={() => (
        <DrawerContent navigation={navigation} drawerRef={drawerRef} />
      )}
    >
      <ImageBackground
        source={require('../assets/bg1.png')}
        style={styles.background}
      >
      <View style={styles.profileContainer}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={openDrawer} style={styles.menuIconContainer}>
            <Image source={require('../images/menu-2.png')} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
          <View style={{alignSelf: 'center'}}>
            <View style={styles.profileImage}>
              <Image source={require('../images/default-pfp.png')} style={styles.profImage} />
            </View>
            <View style={styles.dm }>
              <Ionicons name="chatbubble-sharp" size={24} color="#90EE90" />
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, {fontWeight: '200', fontSize: 30}]}>{username}</Text>
            <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>{email}</Text>
          </View>
      </View>
      </ImageBackground>
    </DrawerLayoutAndroid>
  );
};

export default Profile;
