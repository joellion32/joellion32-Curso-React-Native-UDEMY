import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const HomeWorkScreen = () => {
    return (
        <View style={styles.container}>
            {/* Task 1 */}
            <View style={[styles.box, styles.purpleBox]}></View>
            <View style={[styles.box, styles.orangeBox]}></View>
            <View style={[styles.box, styles.blueBox]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        top: 50
    },
    blueBox: {
        backgroundColor: '#28C4D9',
    }
})