import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { Movie } from '../../../core/models/movie.model'
import { ScrollView } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    heigth?: number;
}


export const PosterCarousel = ({ heigth = 440, movies }: Props) => {
    return (
        <View style={{ height: heigth, marginVertical: 10 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    movies.map(movie => <MoviePoster key={movie.id} movie={movie} />)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})