import { ScrollView, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { RootStackParams } from '../../navigation/Navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { useNavigation } from '@react-navigation/native';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> { };

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { isLoading, movie, cast } = useMovie(movieId)

  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader title={movie.title} poster={movie.poster} originalTitle={movie.originalTitle} />
      {/* Details */}
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  )
}

