import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useMovies } from '../../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();

    const { isLoading, nowPlaying } = useMovies()

    if (isLoading) {
        return (<Text>Cargando...</Text>)
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}></View>
        </ScrollView>
    )
}

