import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store'

export const ProfileScreen = () => {
    const email = useProfileStore((state) => state.email)
    const name = useProfileStore((state) => state.name)
    const changeProfile = useProfileStore((state) => state.changeProfile)


    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>ProfileScreen</Text>

            <Text style={globalStyles.title}>{name}</Text>
            <Text style={globalStyles.title}>{email}</Text>

            <Pressable
                style={globalStyles.primaryButton}
                onPress={() => useProfileStore.setState({ name: 'Joel A. Toribio' })}
            >
                <Text style={globalStyles.buttonText}>Cambiar nombre</Text>
            </Pressable>


            <Pressable
                style={globalStyles.primaryButton}
                onPress={() => useProfileStore.setState({ email: 'joel@google.com' })}
            >
                <Text style={globalStyles.buttonText}>Cambiar email</Text>
            </Pressable>

            <Pressable
                style={globalStyles.primaryButton}
                onPress={() => changeProfile('John Doe', 'John@google.com')}
            >
                <Text style={globalStyles.buttonText}>Regresa a John</Text>
            </Pressable>
        </View>
    )
}
