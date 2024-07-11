import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store'

export const HomeScreen = () => {
    const email = useProfileStore((state) => state.email)
    const name = useProfileStore((state) => state.name)

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>HomeScreen</Text>

            <Text style={globalStyles.title}>{name}</Text>
            <Text style={globalStyles.title}>{email}</Text>
        </View>
    )
}

