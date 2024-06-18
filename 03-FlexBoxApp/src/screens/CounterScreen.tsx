import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {
    const [count, setCount] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>
            {/* <PrimaryButton
                label='Incrementar'
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
            /> */}
            <Button
                mode='contained'
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
            >
                <Text>Incrementar</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        textAlign: 'center',
        fontWeight: '300'
    }
})