import { HttpAdapter } from "../../../config/adapters/http/http.adapters"
import { MovieDBMoviesResponse } from "../../../infrastucture/interfaces/movie-db.responses"
import { MovieMapper } from "../../../infrastucture/mappers/movie.mapper"
import type { Movie } from "../../models/movie.model"

interface Options {
    limit?: number;
    page?: number;
}

export const moviesTopRatedUseCase = async (fecther: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const topRatedMovies = await fecther.get<MovieDBMoviesResponse>('/top_rated', {
            params: {
                page: options?.page ?? 1 // implementando paginacion
            }
        })
        return topRatedMovies.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - Top Rated Movies')
    }
}