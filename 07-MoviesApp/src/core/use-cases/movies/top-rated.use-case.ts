import { HttpAdapter } from "../../../config/adapters/http/http.adapters"
import { MovieDBMoviesResponse } from "../../../infrastucture/interfaces/movie-db.responses"
import { MovieMapper } from "../../../infrastucture/mappers/movie.mapper"
import type { Movie } from "../../models/movie.model"

export const moviesTopRatedUseCase = async (fecther: HttpAdapter): Promise<Movie[]> => {
    try {
        const topRatedMovies = await fecther.get<MovieDBMoviesResponse>('/top_rated')
        return topRatedMovies.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - Top Rated Movies')
    }
}