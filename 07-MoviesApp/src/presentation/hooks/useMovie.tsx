import React, { useEffect, useState } from 'react'
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"
import { FullMovie } from '../../core/models/movie.model';
import { Cast } from '../../core/models/cast.model';

export const useMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState<FullMovie>()
    const [cast, setCast] = useState<Cast[]>()


    useEffect(() => {
        loadMovie()
    }, [movieId])

    const loadMovie = async () => {
        const detailMoviePromise = UseCases.getByIdUseCase(movieDBFetcher, movieId)
        const castMoviePromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId)

        // resolving promises 
        const [detailMovie, castsMovie] = await Promise.all([detailMoviePromise, castMoviePromise])

        setMovie(detailMovie)
        setCast(castsMovie)

        setIsLoading(false)
    }

    return {
        isLoading,
        movie,
        cast,
        // Methods
        loadMovie
    }
}

