import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screen/home';
import About from './screen/about';
import Review from './screen/reviewDetails';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Group
            screenOptions={{ headerStyle: { backgroundColor: '#eee' } }}
          >
            <Stack.Screen name="Home" component={Home} options={{ title: 'GameZone' }} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Review" component={Review} options={{ title: 'Review Details' }} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
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