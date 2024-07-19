import { HttpAdapter } from "../../../config/adapters/http/http.adapters";
import { MovieDBCastResponse } from "../../../infrastucture/interfaces/movie-cast.responses";
import { MovieMapper } from "../../../infrastucture/mappers/movie.mapper";
import type { Cast } from "../../models/cast.model";

export const getMovieCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {
    try {
        const { cast } = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`)
        const actors = cast.map((actor) => MovieMapper.fromMovieDBCastToEntity(actor))
        return actors
    } catch (error) {
        console.error(error);
        throw new Error(`Cannot get movie cast: ${movieId}`)
    }
}