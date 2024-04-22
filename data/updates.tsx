import { ImageSourcePropType } from "react-native";

export interface WakeTechUpdates {
    image: ImageSourcePropType;
    logo: ImageSourcePropType;
    title: string;
}

export const updates: WakeTechUpdates[] = [
    {
        image: require('../assets/updates/Regional-Math-Competition.jpg'),
        logo: require('../assets/updates/eagles-logo.png'),
        title: 'College Hosts Regional Math Competition',
    },
    {
        image: require('../assets/updates/BIOTECH.jpg'),
        logo: require('../assets/updates/eagles-logo.png'),
        title: 'Biotech Students Connect with Employers',
    },
    {
        image: require('../assets/updates/Law-Enforcement.jpg'),
        logo: require('../assets/updates/eagles-logo.png'),
        title: 'Law Enforcement Cadets Graduate',
    },
];