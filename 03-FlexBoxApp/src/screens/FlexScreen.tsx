import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    box: {
        backgroundColor: '#5856D6',
        flex: 1, // 1 + 2 + 3 = 6       1/6
    },
    box2: {
        backgroundColor: '#6563c0', // 2/6 = 1/3
        flex: 2,
    },
    box3: {
        backgroundColor: '#706fd8', // 3/6 = 1/2
        flex: 3,
    },
})