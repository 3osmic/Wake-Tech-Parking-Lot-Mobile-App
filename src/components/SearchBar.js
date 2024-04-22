import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { View, TextInput, Button, StyleSheet ,SearchIcon, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log(`Do a search with: ${query}`);
    onSearch(query);
  };

  return (
    <SafeAreaView style={[styles.inputContainer]}>
      <TouchableOpacity style={styles.buttoncontainer}>
          <Icon  name="search" size={30} color="#000" />
        </TouchableOpacity>
      <View style={[styles.textInputContainer]}>
        <TextInput 
          placeholder="Search Help Center"
          value={query}
          onChangeText={setQuery}
        />
      </View>
      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 inputContainer: {
    flexDirection: 'row',
    width:'90%',
    height:50,
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#275c7a',
    justifyContent: 'space-between',
    borderRadius:25,
    marginBottom: 20,
    marginTop: 20,
    marginLeft:20,
  },
  textInputContainer:{
    flex:1,
    marginHorizontal: 10,
  },
  buttoncontainer:{
    backgroundColor:'#fff',
    padding:10,
    borderRadius:25,
    opacity:0.8,
  }
});

export default SearchBar;