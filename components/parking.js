import { err } from 'react-native-svg';
import parkingData from '../parkingspaces.json'

export let parkingSpot;

function verifySpot(parkingId) {
    if (parkingId === '1103' || parkingId === '2229' || parkingId === '3001') {
        return true;
    }
    else {
        return false;
    }
}

export function saveSpot(parkingId) {
    if (verifySpot(parkingId)) {
        parkingSpot = parkingId;
    }
    else {
        console.log('Invalid ID')
    }
}

export function getLatitude(parkingId) {
    let latitude = parkingData[parkingId].latitude;
    return latitude;
}

export function getLongitude(parkingId) {
    let longitude = parkingData[parkingId].longitude;
    return longitude;
}

export function getPrice(parkingId) {
    let price = parkingData[parkingId].price;
    return price;
}

export function getCampus(parkingId) {
    if (parkingId === '1103') {
        return "North Campus";
    }
    if (parkingId === '2229') {
        return "Southern Campus";
    }
    if (parkingId === '3001') {
        return "RTP Campus";
    }
}