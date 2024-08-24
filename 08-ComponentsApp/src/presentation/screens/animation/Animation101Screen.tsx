import { Animated, StyleSheet, View, Button, Easing } from 'react-native'
import React from 'react'
import { colors } from '../../../config/theme'
import { useAnimation } from '../../hooks/useAnimation'

export const Animation101Screen = () => {

    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation()

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.purpleBox,
            {
                opacity: animatedOpacity,
                transform: [{ translateY: animatedTop }]
            }]
            } />

            <Button onPress={() => {
                fadeIn({})
                startMovingTopPosition({
                    initialPosition: -100,
                    easing: Easing.elastic(2),
                    duration: 750,
                })
            }} title='FadeIn' />
            <Button onPress={() => fadeOut({})} title='FadeOut' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    }
})