import { useEffect, useState } from "react"
import { Movie } from "../../core/models/movie.model"
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"

let popularPageNumber = 1;
let topRatedPageNumber = 1;
let upcomingPageNumber = 1;


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
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
        const upcomingPromise = UseCases.moviesUpComingUseCase(movieDBFetcher);

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

    /** Infinite Scroll */
    const NextPage = async (method: string) => {

        switch (method) {
            case "popular":
                popularPageNumber++;
                const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
                    page: popularPageNumber
                })

                setPopular(prev => [...prev, ...popularMovies])
                break;
            case "topRated":
                topRatedPageNumber++;
                const topRatedMovies = await UseCases.moviesTopRatedUseCase(movieDBFetcher, {
                    page: topRatedPageNumber
                })

                setTopRated(prev => [...prev, ...topRatedMovies])
                break;
            case "upcoming":
                upcomingPageNumber++;
                const upcomingMovies = await UseCases.moviesUpComingUseCase(movieDBFetcher, {
                    page: upcomingPageNumber
                })

                setUpcoming(prev => [...prev, ...upcomingMovies])
                break;
            default:
                break;
        }
    }


    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,

        // Methods
        NextPage,
    }
}

