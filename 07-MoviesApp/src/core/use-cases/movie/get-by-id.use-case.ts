import { HttpAdapter } from "../../../config/adapters/http/http.adapters";
import { MovieDetail } from "../../../infrastucture/interfaces/movie-detail.responses";
import { MovieMapper } from "../../../infrastucture/mappers/movie.mapper";
import { FullMovie } from "../../models/movie.model";

export const getByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
    try {
        const movieDetailResult = await fetcher.get<MovieDetail>(`/${movieId}`)
        return MovieMapper.fromMovieDBToEntity(movieDetailResult)
    } catch (error) {
        throw new Error(`Cannot get movie by id: ${movieId}`)
    }
}