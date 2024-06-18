import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PrimaryButton } from '../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'
import { globalStyles } from '../theme/theme'

export const SettingScreen = () => {

    const navigator = useNavigation();

    return (
        <View style={globalStyles.container}>
            <Text style={{ marginBottom: 10 }}>SettingScreen</Text>

            <PrimaryButton label="Regresar" onPress={() => navigator.goBack()} />
            {/* para ir al home */}
            <PrimaryButton label="Regresar al Home" onPress={() => navigator.dispatch(StackActions.popToTop())} />
        </View>
    )
}

const styles = StyleSheet.create({})