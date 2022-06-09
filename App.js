import React , {useState , useEffect} from 'react';
import { StyleSheet, Text, View , LogBox} from 'react-native';
import RouteNoAuth from './src/Navigation/RouteNoAuth'

LogBox.ignoreLogs([
  "Animated",
  "Setting a timer",
  "Avatar.onAccessoryPress",
  "Avatar.showAccessory",
]);
export default function App() {
  return (
    <RouteNoAuth/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    
  },
});
