import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';

export default OnboardingItem = ({item}) => {

    const { width } = useWindowDimensions();

    return(
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]}/>

            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontWeight: '300',
        textAlign: 'center',
        paddingHorizontal: 64,
    }
});