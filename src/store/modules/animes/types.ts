import { AnimeListElement } from '../../../domain/entities/AnimeListElement'
import { Season } from '../../../domain/entities/Season'

/**
 * Action Types
 */
export enum AnimesTypes {
  SET_SEASON = '@animes/SET_SEASON',
  LOAD_ANIME_LIST = '@animes/LOAD_ANIME_LIST',
  LOAD_ANIME_LIST_SUCCESS = '@animes/LOAD_ANIME_LIST_SUCCESS',
  LOAD_ANIME_LIST_FAILURE = '@animes/LOAD_ANIME_LIST_FAILURE',
  LOAD_MOST_POPULAR = '@animes/LOAD_MOST_POPULAR',
  LOAD_MOST_POPULAR_SUCCESS = '@animes/LOAD_MOST_POPULAR_SUCCESS'
}

export interface SetSeasonAction {
  type: typeof AnimesTypes.SET_SEASON,
  payload: { season: Season, year: number }
}

/**
 * Data Types
 */
export interface AnimesState {
  readonly animes: AnimeListElement[],
  readonly mostPopular: AnimeListElement[],
  readonly season: { name?: Season, year?: number },
  readonly isLoading: boolean,
  readonly hasError: boolean
}