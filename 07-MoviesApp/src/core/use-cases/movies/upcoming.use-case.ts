import { HttpAdapter } from "../../../config/adapters/http/http.adapters"
import { MovieDBMoviesResponse } from "../../../infrastucture/interfaces/movie-db.responses"
import { MovieMapper } from "../../../infrastucture/mappers/movie.mapper"
import type { Movie } from "../../models/movie.model"

export const moviesUpComingUseCase = async (fecther: HttpAdapter): Promise<Movie[]> => {
    try {
        const upComingMovies = await fecther.get<MovieDBMoviesResponse>('/upcoming')
        return upComingMovies.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - UpComing')
    }
}