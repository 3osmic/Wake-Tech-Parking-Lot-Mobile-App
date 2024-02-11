import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from './screens/Sign-in';
import OnboardingScreen from './screens/Onboarding';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'OnboardingScreen'
        /* Hides the headers in the pages */
        screenOptions={{
        headerShown: false
      }}
      >
        {/* Navigation to the Onboarding Screen */}
        <Stack.Screen
          name = "OnboardingScreen"
          component = {OnboardingScreen}
          />
        {/* Navigation to the Login Screen */}
        <Stack.Screen
          name = "SignInScreen"
          component = {SignInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}