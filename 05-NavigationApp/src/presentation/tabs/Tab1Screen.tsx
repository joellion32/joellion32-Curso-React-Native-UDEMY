import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { HamburgerMenu } from '../components/shared/HamburgerMenu'

export const Tab1Screen = () => {

    return (
        <View>
            <HamburgerMenu />

            <Text>Tab1Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})