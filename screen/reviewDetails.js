import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from '../styles/global';

export default function Review({ navigation, route }) {


    return (
        <View style={globalStyles.container}>
            <Text>{route.params.title}</Text>
            <Text>{route.params.body}</Text>
            <Text>{route.params.rating}</Text>
        </View>
    )
}
