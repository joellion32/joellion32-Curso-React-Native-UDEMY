import { HttpAdapter } from "../../../config/adapters/http/http.adapters"
import { MovieDBMoviesResponse } from "../../../infrastucture/interfaces/movie-db.responses"
import { MovieMapper } from "../../../infrastucture/mappers/movie.mapper"
import type { Movie } from "../../models/movie.model"

interface Options {
    limit?: number;
    page?: number;
}

export const moviesUpComingUseCase = async (fecther: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const upComingMovies = await fecther.get<MovieDBMoviesResponse>('/upcoming', {
            params: {
                page: options?.page ?? 1 // implementando paginacion
            }
        })
        return upComingMovies.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - UpComing')
    }
}