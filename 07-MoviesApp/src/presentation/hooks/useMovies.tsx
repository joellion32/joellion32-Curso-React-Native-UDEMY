import { useEffect, useState } from "react"
import { Movie } from "../../core/models/movie.model"
import * as UseCases from '../../core/use-cases/movies/now-playing.use-case'
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"

export const useMovies = () => {
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])
    const [upcoming, setUpcoming] = useState<Movie[]>([])

    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        initialLoad()
    }, [])

    // consumiendo servicios (caso de uso)
    const initialLoad = async () => {
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const topRatedPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const upcomingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);

        // utilizando Promise.all() para llamar todos los servicios al mismo tiempo
        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies
        ] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise])

        // almacenando en los estados
        setNowPlaying(nowPlayingMovies)
        setPopular(popularMovies)
        setTopRated(topRatedMovies)
        setUpcoming(upcomingMovies)

        setisLoading(false)
    }



    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming
    }
}

