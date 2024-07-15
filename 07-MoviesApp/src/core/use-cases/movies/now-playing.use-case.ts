import { HttpAdapter } from "../../../config/adapters/http/http.adapters"
import { NowPlayingResponse } from "../../../infrastucture/interfaces/movie-db.responses"
import { MovieMapper } from "../../../infrastucture/mappers/movie.mapper"
import type { Movie } from "../../models/movie.model"

export const moviesNowPlayingUseCase = async (fecther: HttpAdapter): Promise<Movie[]> => {
    try {
        const nowPlaying = await fecther.get<NowPlayingResponse>('/now_playing')
        return nowPlaying.results.map(result => MovieMapper.fromMovieDBResultToEntity(result))
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - NowPlaying')
    }
}