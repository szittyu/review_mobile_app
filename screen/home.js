import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
        </View>
    );
}

// https://docs.expo.dev/guides/using-custom-fonts/
const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    titleText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
    }
})