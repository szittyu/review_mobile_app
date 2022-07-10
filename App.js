import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screen/home';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  const [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  } else {
    return (
      <Home />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});