import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import type { Movie } from '../../../core/models/movie.model';
import { FlatList } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    title?: string;
    loadNextPage?: () => void;
}

export const HorizontalCarousel = ({ movies, title, loadNextPage }: Props) => {

    const isLoading = useRef(false)

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200)

    }, [movies])

    // infinite scroll
    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        // condicion para no disparar mas el evento mientras esta cargandor
        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        // calcular si el scroll llego al final 
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
        if (!isEndReached) return;

        isLoading.current = true;

        // Cargar las siguientes peliculas 
        loadNextPage && loadNextPage()
    }


    return (
        <View style={{ height: title ? 260 : 220 }}>
            {
                title && (
                    <Text style={{
                        fontSize: 30,
                        fontWeight: '300',
                        marginLeft: 10,
                        marginBottom: 10,
                        color: 'black'
                    }}>{title}</Text>
                )
            }


            <FlatList
                data={movies}
                renderItem={({ item }) => <MoviePoster movie={item} width={140} height={200} />}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => onScroll(event)}
            />
        </View>
    )
}

