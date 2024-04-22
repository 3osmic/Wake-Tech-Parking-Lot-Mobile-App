import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { View,Text,FlatList, TextInput, Button, StyleSheet ,SearchIcon, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


const data = [
  {
    id: "e3ea462e-032e-404f-ae2a-2170f7685bd1",
    title: "Get Started",
    icon: "flag",
    screen: "GetStartedScreen",
  },
  {
    id: "57a4fcc6-bb20-4602-9893-ec4686c33f7c",
    title: "find a parking spot",
    icon:"navigate",
    screen: "NavigationScreen",
  },
  {
    id: "385c9cd1-7ab7-4e39-9505-88f9ffb7a0e2",
    title: "Privacy,Safety and Security",
     icon: "lock-closed",
    screen: "PrivacyScreen",
  },
  {
    id: "4e58d94e-8a1d-4928-af6f-bdb16df3f1e6",
    title: "Community",
     icon: "people",
    screen: "PrivacyScreen",
  },
    {
        id: "5da46e8c-08ed-45af-a51c-0f27e1c7407b",
        title: "Accessibility",
         icon: "accessibility",
        screen: "PrivacyScreen",
    },
    {
        id: "b9615600-ac91-47c7-8bf2-bbba9e4f8ec3",
        title: "Pay For Parking",
         icon: "wallet",
        screen: "PrivacyScreen",
    },
    {
        id: "ffc23dc2-443e-4b58-9084-7b54a657d642",
        title: "Contact US",
         icon: "chatbubble-ellipses",
        screen: "PrivacyScreen",
    }
    
];


const PopularTopics = () => {
  return (
    <View>
      <Text style={styles.topicHeaderText} >Popular Topics</Text>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
            <TouchableOpacity style={styles.topicsContainer} >
                 <Icon name={item.icon} size={25} color="#619bd4" />
                 <Text style={styles.topicsText} >{item.title}</Text>   
                 
            </TouchableOpacity>
            )}
            />
    </View>
  )
}

export default PopularTopics

const styles = StyleSheet.create({

    PopularTopics: {
        flexDirection: 'row',
        width:'100%',
        height:50,
        alignItems: 'center',
        borderWidth:1,
        bordercolor:'lightgrey',
        justifyContent: 'space-between',
        borderRadius:25,
        marginBottom: 20,
        marginTop: 20,
      },
      textInputContainer:{
        flex:1,
        marginHorizontal: 10,
      },
      buttoncontainer:{
        backgroundColor:'#fff',
        padding:10,
        borderRadius:25,
      },
      topicsContainer: { 
        flex: 1,
        backgroundColor:'#dfeaf5',
        borderRadius: 10, 
        opacity:0.8,
        marginTop: 10,
        marginLeft:20,
        marginRight:20,
        padding: 10,
        flexDirection: 'row',
    
        },
        topicHeaderText: {
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginRight: 10,
            color: '#275c7a',
        },
        topicsText: {
            fontSize: 14,
            fontWeight: 'bold',
            marginLeft: 10,
            marginRight: 10,
            color: '#275c7a',
        },
})