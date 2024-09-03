import { Animated, StyleSheet, View, Button, Easing } from 'react-native'
import React, { useContext } from 'react'
import { useAnimation } from '../../hooks/useAnimation'
import { ThemeContext } from '../../context/ThemeContext'


export const Animation101Screen = () => {
    const { colors } = useContext(ThemeContext)
    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation()

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Animated.View style={[styles.purpleBox,
            {
                backgroundColor: colors.primary,
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
        width: 150,
        height: 150,
    }
})