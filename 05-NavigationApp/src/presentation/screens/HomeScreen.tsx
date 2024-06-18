import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '../theme/theme'
import { useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../components/shared/PrimaryButton'

export const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <PrimaryButton onPress={() => navigation.navigate('Products' as never)} label="Ir a Productos" />
            <PrimaryButton onPress={() => navigation.navigate('Settings' as never)} label="Ir a Configuracion" />
        </View>
    )
}

const styles = StyleSheet.create({})