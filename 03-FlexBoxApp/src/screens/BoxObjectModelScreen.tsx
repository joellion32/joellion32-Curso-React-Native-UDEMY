import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}
            <View style={styles.purpleBox}>
                <Text style={{ color: 'white' }}>Hola Mundo</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C0C0C'
    },
    title: {
        fontSize: 30,
        borderWidth: 10,
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    purpleBox: {
        height: 30,
        backgroundColor: 'purple',
        marginHorizontal: 20,
        marginVertical: 50,
        padding: 5

    }
})