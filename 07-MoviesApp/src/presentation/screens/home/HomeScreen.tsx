import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useMovies } from '../../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PosterCarousel } from '../../components/movies/PosterCarousel'
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel'
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader'

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();

    const { isLoading, nowPlaying, popular, topRated, upcoming, NextPage } = useMovies()

    if (isLoading) {
        return <FullScreenLoader />
    }

    return (
        <ScrollView>
            <View style={{ paddingBottom: 30 }}>
                {/* Principal */}
                <PosterCarousel movies={nowPlaying} />
                {/* Populares */}
                <HorizontalCarousel title='Populares' movies={popular} loadNextPage={() => NextPage('popular')} />
                {/* Top Rated */}
                <HorizontalCarousel title='Mejor calificadas' movies={topRated} loadNextPage={() => NextPage('topRated')} />
                {/* Próximamente */}
                <HorizontalCarousel title='Próximamente' movies={upcoming} loadNextPage={() => NextPage('upcoming')} />
            </View>
        </ScrollView>
    )
}

