import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Southern Wake', value: '1' },
  { label: 'Scott Nothern', value: '2' },
  { label: 'Western Wake', value: '3' },
];

export const AssignedParking = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handlePress = () => {
    if (value) {
      navigation.navigate('ParkingSpaces', { campus: value });
    } else {
      // Handle case where no campus is selected
      alert('Please select a campus first.');
    }
  };

  return (
    <ImageBackground source={require('../assets/bg2.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={require('../assets/transparent_icon.png')} style={styles.wpIcon} />
          <Text style={styles.parkingText}>Select Your Campus Here</Text>
        </View>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Campus' : '...'}
          searchPlaceholder='Search...'
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', // Align content vertically in the middle
    alignItems: 'center', // Align content horizontally in the middle
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wpIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  parkingText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    borderRadius: 8,
    width: '80%', // Adjust width as needed
  },
  dropdown: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#888',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1d4f7e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AssignedParking;
