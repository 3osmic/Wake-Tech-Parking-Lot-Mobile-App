import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, FlatList, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import NextButton from './NextButton';
import slides from './Slides';

import bg1 from '../../assets/bg1.png';
import pinpoint from '../../images/pinpoint.png';

const { width } = Dimensions.get('window');

export default Onboarding = () => {
    const navigation = useNavigation();

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            navigation.navigate('Login');
        }
    };

    return (
        <ImageBackground source={bg1} style={styles.bg1}>
            <View style={styles.container}>
                <Image
                    source={pinpoint}
                    style={styles.pinpoint}/>

                <View style={{ flex: 3 }}>
                    <FlatList
                        data={slides}
                        renderItem={({ item }) => <OnboardingItem item={item} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={false}
                        keyExtractor={(item) => item.id}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                            useNativeDriver: false,
                        })}
                        scrollEventThrottle={32}
                        onViewableItemsChanged={viewableItemsChanged}
                        viewabilityConfig={viewConfig}
                        ref={slidesRef}
                    />
                </View>

                <Paginator data={slides} scrollX={scrollX} />
                <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg1: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    pinpoint: {
        top: 20,
        width: '10%',
        height: '10%',
        resizeMode: 'contain',
    },
});
