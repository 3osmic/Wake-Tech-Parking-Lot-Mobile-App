import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    backButton: {
      position: 'absolute',
      top: 40,
      left: 20,
      zIndex: 10, 
    },
    backIcon: {
      width: 30, 
      height: 30, 
    },
});