import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

export const DimensionScreen = () => {
    // const { width, height } = Dimensions.get('window') // solo para obtener las propiedades estaticas
    const { width, height } = useWindowDimensions() // customHook obtener size screen automatico

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.8
                }}></View>
            </View>

            <Text>w: {width} h: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%'
    }
})