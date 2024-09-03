import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import Button from '../../components/ui/Button'
import { ThemeContext } from '../../context/ThemeContext'

export const ChangeThemeScreen = () => {

    const { setTheme, currentTheme, colors } = useContext(ThemeContext)

    return (
        <CustomView margin>
            <Title text={`Cambiar tema ${currentTheme}`} safe />

            <Button text='Claro' onPress={() => setTheme('light')} />
            <View style={{ height: 10 }} />

            <Button text='Oscuro' onPress={() => setTheme('dark')} />
            <View style={{ height: 10 }} />

            <Text style={{ color: colors.text }}>
                {
                    JSON.stringify(colors, null, 2)
                }
            </Text>
        </CustomView>
    )
}

const styles = StyleSheet.create({})