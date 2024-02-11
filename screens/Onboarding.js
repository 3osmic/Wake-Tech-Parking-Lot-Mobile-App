import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import  { SIZES, COLORS }  from '../constants/theme';


const slides = [
    {
        id: '1',
        image: require('../images/p1.png'),
        title: 'Welcome To Wake Park!',
        heading: 'Navigate Campus Parking with Ease',
        subtitle: 'Your Smart Parking Solution',
        description: 'Welcome to Wake Park, the ultimate mobile app designed to simplify your campus parking experience. Say goodbye to the stress of finding your vehicle – our innovative QR code system has you covered. Let\'s make parking hassle-free!',
    
    },
    {
        id: '2',
        image: require('../images/p2.png'),
        title: 'Effortless Parking Management',
        heading: 'Scan, Park, Enjoy!',
        subtitle: 'Streamlined Parking Process',
        description: 'No more wandering around the parking lot! With WakePark, simply scan the QR code at your designated parking area to register your spot instantly. Enjoy the convenience of efficient parking management, ensuring a quick and stress-free return to your vehicle.',

    },
    {
        id: '3',
        image: require('../images/p3.png'),
        title: 'Get Ready to Simplify Campus Parking with WakePark!',

    },
];

export default function OnboardingScreen() {
    const navigation = useNavigation();
    const [showHomePage] = useState(false);

    const buttonLabel = (label) => {
        return (
            <View style={{
                padding: 12,
            }}>
                <Text style={{
                    fontWeight: 'bold',
                }}>
                    {label}
                </Text>
            </View>
        )
    }

    if (!showHomePage) {
        return (
            <AppIntroSlider
                data={slides}
                renderItem={({item}) => {
                    return (
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            padding: 15,
                            margin: 10,
                            marginTop: 50,
                        }}>
                            <Image 
                                source={require('../images/pinpoint.png')} 
                                style={{
                                    width: 40,
                                    height: 40,
                                    
                                }}
                            />
                            <Text style={{
                                fontWeight: 'bold',
                                color: '#000000',
                                margin: 5,
                                textAlign: 'center', 
                                fontSize: SIZES.h3, 
                            }}>
                                {item.title}
                            </Text>
                            <Image
                                source={item.image}
                                style={{
                                    width: 300,
                                    height: 300,
                                    marginTop: -20,
                                    marginBottom: -30,
                                }}
                                resizeMode='contain'
                            />
                            <Text style={{
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                margin: 5,
                            }}>
                                {item.heading}
                            </Text>
                            <Text style={{
                                margin: 10,
                            }}>
                                {item.subtitle}
                            </Text>
                            <Text style={{
                                color: COLORS.grey,
                                textAlign: 'center',
                            }}>
                                {item.description}
                            </Text>
                        </View>
                    )
                }}
                activeDotStyle={{
                    backgroundColor: COLORS.primary,
                    width: 30,
                }}
                showSkipButton
                renderNextButton={() => buttonLabel("Next")}
                renderSkipButton={() => buttonLabel("Skip")}
                renderDoneButton={() => buttonLabel("Done")}
                onDone={() => {
                    navigation.navigate('SignInScreen');
                }}
            />
        )
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Onboarding Screen</Text>
        </View>
    );
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});