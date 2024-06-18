import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../themes/global.styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterScreenM3 = () => {
    const [count, setCount] = useState(0)

    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{count}</Text>
            <Icon name='accessibility-outline' size={35} />

            <FAB
                icon='add'
                style={globalStyles.fab}
                onLongPress={() => setCount(0)}
                onPress={() => setCount(count + 1)}
            />
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