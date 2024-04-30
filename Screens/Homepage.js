import React, { useEffect } from "react";
import { Text, View, FlatList, Image, StyleSheet, ImageBackground, TouchableOpacity, ScrollView,SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import colors from '../src/components/colors';
import Chat from '../src/components/Chat';
const HomepageFix = () => {
  const images = [
    { key: '1', source: require('../assets/updates/Regional-Math-Competition.jpg'), title: 'College Hosts Regional Math Competition' },
    { key: '2', source: require('../assets/updates/BIOTECH.jpg'), title: 'Biotech Students Connect with Employers' },
    { key: '3', source: require('../assets/updates/Law-Enforcement.jpg'), title: 'Law Enforcement Cadets Graduate' },
  ];

  const prices = [
    { id: 1, title: 'Southern S1', price: '$5' },
    { id: 2, title: 'Scott Northern S2', price: '$10' },
    { id: 3, title: 'RTP S3', price: '$15' },
    { id: 4, title: 'Eastern S4', price: '$10' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={item.source}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  const renderPriceItem = ({ item }) => (
    <View style={styles.priceContainer}>
      <Text style={styles.spotTitle}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.price}</Text>
    </View>
  );

  /* Chat Button */
  const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft: 15}}/>
            ),
            headerRight: () => (
                <Image
                    source={{ uri: catImageUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }}
                />
            ),
        });
    }, [navigation]);

  return (

    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../assets/bg2.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderTitle}>WAKE TECH UPDATES</Text>
          <FlatList
            data={images}
            renderItem={renderItem}
            horizontal
            pagingEnabled
          />
        </View>

        <View style={styles.parkingPriceContainer}>
          <View style={styles.waketechIcon}>
            <Image source={require('../assets/icon.png')} style={styles.icon} />
            <Text style={styles.priceTitle}>Parking Spots</Text>
            <View style={styles.titleIconsContainer}>
              <TouchableOpacity style={styles.titleIconContainer}>
                <Image source={require('../assets/magnifying-glass.png')} style={styles.titleIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.titleIconContainer}>
                <Image source={require('../assets/three-vertical-dots.png')} style={styles.titleIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={prices}
            renderItem={renderPriceItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.featuredContainer}>
          <Text style={styles.featuredTitle}>Featured Campus</Text>
          <Image source={require('../assets/WakeTech.png')} style={styles.campus} />
          <View style={styles.chatContainer}>
              <TouchableOpacity
                  onPress={() => navigation.navigate("Chat")}
                  style={styles.chatButton}
              >
                  <Entypo name="chat" size={24} color={colors.lightGray} />
                
              </TouchableOpacity>
          </View>
        </View>
       
      </ImageBackground>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  sliderContainer: {
    backgroundColor: 'white',
    marginTop: 0,
    paddingTop: 20,
    paddingBottom: 10,
  },
  sliderTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 12,
  },
  spotTitle: {
    fontSize: 13,
    color: '#888',
  },
  priceTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  parkingPriceContainer: {
    margin: 10,
  },
  priceContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 5,
    padding: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#888',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
  },
  waketechIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  titleIconsContainer: {
    flexDirection: 'row',
  },
  titleIconContainer: {
    padding: 5,
  },
  titleIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  featuredContainer: {
   display: 'flex',
   flexDirection: 'column',
   flex: 1,
   
   margin: 10,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  campus: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
  },
  /* Chat Button */
  chatContainer: {
            flex: 1,
            position: 'relative',
            top: 0,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: "transparent",
        },
        chatButton: {

            backgroundColor: colors.primary,
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,

            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginRight: 20,
            marginBottom: 50,
        }
});

export default HomepageFix;
