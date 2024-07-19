import { HttpAdapter } from "../../../config/adapters/http/http.adapters";
import { MovieDBMoviesResponse } from "../../../infrastucture/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastucture/mappers/movie.mapper";
import type { Movie } from "../../models/movie.model";

interface Options {
    limit?: number;
    page?: number;
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {

        const popularMovies = await fetcher.get<MovieDBMoviesResponse>('/popular', {
            params: {
                page: options?.page ?? 1 // implementando paginacion
            }
        })
        return popularMovies.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - Popular')
    }
}