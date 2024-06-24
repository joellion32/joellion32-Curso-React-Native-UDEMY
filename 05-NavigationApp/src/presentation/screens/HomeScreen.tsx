import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { globalStyles } from '../theme/theme'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../components/shared/PrimaryButton'
import { RootStackParams } from '../routes/StackNavigator'
import { HamburgerMenu } from '../components/shared/HamburgerMenu'

export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <>
            <HamburgerMenu />
            <View style={globalStyles.container}>
                <PrimaryButton onPress={() => navigation.navigate('Products' as never)} label="Ir a Productos" />
                <PrimaryButton onPress={() => navigation.navigate('Settings' as never)} label="Ir a Configuracion" />
            </View>
        </>
    )
}

const styles = StyleSheet.create({})