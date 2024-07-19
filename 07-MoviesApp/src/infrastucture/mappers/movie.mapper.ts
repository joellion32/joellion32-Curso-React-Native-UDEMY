import { Cast } from "../../core/models/cast.model";
import { FullMovie, Movie } from "../../core/models/movie.model";
import { MovieDBCast } from "../interfaces/movie-cast.responses";
import type { Result } from "../interfaces/movie-db.responses";
import { MovieDetail } from "../interfaces/movie-detail.responses";

export class MovieMapper {
    static fromMovieDBResultToEntity(result: Result): Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
        }
    }

    static fromMovieDBToEntity(movie: MovieDetail): FullMovie {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            genres: movie.genres.map(genre => genre.name),
            duration: movie.runtime,
            budget: movie.budget,
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(company => company.name),
        }
    }

    static fromMovieDBCastToEntity(actor: MovieDBCast): Cast {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : 'https://i.stack.imgur.com/l60Hf.png'
        }
    }
} 