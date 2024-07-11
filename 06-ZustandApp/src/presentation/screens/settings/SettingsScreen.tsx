import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../config/app-theme'
import { useCounterStore } from '../../store/counter-store'

export const SettingsScreen = () => {
    const count = useCounterStore((state) => state.count)
    const incrementBy = useCounterStore((state) => state.incrementBy)
    const decrementBy = useCounterStore((state) => state.decrementBy)



    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>{count}</Text>


            <Pressable
                style={globalStyles.primaryButton}
                onPress={() => incrementBy(1)}
            >
                <Text style={globalStyles.buttonText}>+1</Text>
            </Pressable>


            <Pressable
                style={globalStyles.primaryButton}
                onPress={() => decrementBy(1)}
            >
                <Text style={globalStyles.buttonText}>-1</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({})