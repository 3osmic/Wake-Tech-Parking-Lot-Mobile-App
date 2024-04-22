import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Onboarding from './Screens/Onboarding/Onboarding';
import Homepage from './Screens/Homepage';
import LoginScreen from './Screens/Login'; // Import Login screen
import Profile from './Screens/Profile';
import Parking from './Screens/Parking';
import NavigationPage from './Screens/NavigationPage';
import Payments from './Screens/Payments';
import ForgotPassword from './Screens/Forgot-Password';
import SignupScreen from './Screens/Signup';
import AssignedParking from './Screens/AssignedParking';
import PreviousParking from './Screens/PreviousParking';
import SavedParkingList from './Screens/SavedParkingList';
import SavedPayments from './Screens/SavedPayments';
import MakePayment from './Screens/MakePayment';
import SaveParking from './Screens/SaveParking';
import ParkingSpaces from './Screens/ParkingSpaces';
import AssignedParkingDetails from './Screens/AssignedParkingDetails';
import SavedAssigned from './Screens/SavedAssigned';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomepageTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 10, marginTop: -7 }}>Home</Text>
          ),
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 10, marginTop: -7 }}>Profile</Text>
          ),
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-graduate" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Parking"
        component={Parking}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 10, marginTop: -7 }}>Parking</Text>
          ),
          tabBarIcon: ({ color }) => <FontAwesome5 name="car-side" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Navigation"
        component={NavigationPage}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 10, marginTop: -7 }}>Navigation</Text>
          ),
          tabBarIcon: ({ color }) => <MaterialIcons name="location-pin" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 10, marginTop: -7 }}>Payments</Text>
          ),
          tabBarIcon: ({ color }) => <FontAwesome5 name="paypal" size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};


const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="HomePage" component={HomepageTabs} />
          <Stack.Screen name="AssignedParking" component={AssignedParking} />
          <Stack.Screen name="PreviousParking" component={PreviousParking} />
          <Stack.Screen name="SavedParkingList" component={SavedParkingList} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Payments" component={Payments} />
          <Stack.Screen name="SavedPayments" component={SavedPayments} />
          <Stack.Screen name="MakePayment" component={MakePayment} />
          <Stack.Screen name="Navigation" component={NavigationPage} />
          <Stack.Screen name="SaveParking" component={SaveParking} />
          <Stack.Screen name="ParkingSpaces" component={ParkingSpaces} />
          <Stack.Screen name="AssignedParkingDetails" component={AssignedParkingDetails} />
          <Stack.Screen name="SavedAssigned" component={SavedAssigned} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default App;
