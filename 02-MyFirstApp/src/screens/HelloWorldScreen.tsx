import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';


interface Props {
    name?: string
}

export default function HelloWorldScreen({ name = 'World' }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>Hello, {name}</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        padding: 20
    }
})