import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'; // Import ImageBackground
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { SIZES, COLORS } from '../constants/theme';

const slides = [
    {
        id: '1',
        image: require('../images/O1.png'),
        title: 'Welcome To Wake Park!',
        heading: 'Navigate Campus Parking with Ease',
        subtitle: 'Your Smart Parking Solution',
        description: 'Welcome to Wake Park, the ultimate mobile app designed to simplify your campus parking experience. Say goodbye to the stress of finding your vehicle – our innovative QR code system has you covered. Let\'s make parking hassle-free!',
    },
    {
        id: '2',
        image: require('../images/O2.png'),
        title: 'Effortless Parking Management',
        heading: 'Scan, Park, Enjoy!',
        subtitle: 'Streamlined Parking Process',
        description: 'No more wandering around the parking lot! With WakePark, simply scan the QR code at your designated parking area to register your spot instantly. Enjoy the convenience of efficient parking management, ensuring a quick and stress-free return to your vehicle.',
    },
    {
        id: '3',
        image: require('../images/O3.png'),
        title: 'Get Ready to Simplify Campus Parking with WakePark!',
    },
    {
        id: '4',
        image: require('../images/O4.png'),
        title: 'Get Ready to Simplify Campus Parking with WakePark!',
    },
];

export default function OnboardingScreen() {
    const navigation = useNavigation();
    const [showHomePage] = useState(false);

    const buttonLabel = (label, onPress, style) => {
        return (
            <View style={{
                padding: 12,
                ...style,
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: style && style.color ? style.color : 'black',
                }} onPress={onPress}>
                    {label}
                </Text>
            </View>
        )
    }

    const renderButton = (index) => {
        if (index === slides.length - 1) {
            // Last slide
            return buttonLabel("Get Started", () => {
                navigation.navigate('Login');
            }, styles.getStartedBtn);
        } else {
            // Other slides
            return null;
        }
    }

    if (!showHomePage) {
        return (
            // Use ImageBackground for the background image
            <ImageBackground
                source={require('../assets/bg1.png')} // Your background image
                style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
            >
                <AppIntroSlider
                    data={slides}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 15,
                            }}>
                                <Image
                                    source={require('../images/pinpoint.png')}
                                    style={{
                                        width: '10%',
                                        height: 50,
                                        resizeMode: 'contain',
                                    }}
                                />
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: '#000000',
                                    textAlign: 'center',
                                    fontSize: SIZES.h3,
                                    padding: 10,
                                }}>
                                    {item.title}
                                </Text>
                                <Image
                                    source={item.image}
                                    style={{
                                        transform: [{ translateY: -50 }],
                                        marginBottom: -120,
                                        width: '100%',
                                        height: 400,
                                    }}
                                    resizeMode='contain'
                                />
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontStyle: 'italic',
                                    padding: 10,
                                }}>
                                    {item.heading}
                                </Text>
                                <Text style={{}}>
                                    {item.subtitle}
                                </Text>
                                <Text style={{
                                    color: COLORS.grey,
                                    textAlign: 'center',
                                    padding: 20,
                                }}>
                                    {item.description}
                                </Text>
                                {renderButton(index)}
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
                    renderDoneButton={() => null}
                />
            </ImageBackground>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Onboarding Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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

    getStartedBtn: {
        backgroundColor: '#93B4F9',
        marginTop: -50,
        padding: 20,
        borderRadius: 10,
        color: 'white',
    },
});
