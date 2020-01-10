import { Anime } from "../../../domain/entities/Anime";
import { Season } from "../../../domain/entities/Season";

/**
 * Action Types
 */
export enum AnimesTypes {
  LOAD_ANIME_LIST = '@animes/LOAD_ANIME_LIST',
  SET_SEASON = '@animes/SET_SEASON',
  LOAD_ANIMES_OF_A_SEASON = '@animes/LOAD_ANIMES_OF_A_SEASON',
  LOAD_ANIME_LIST_SUCCESS = '@animes/LOAD_ANIME_LIST_SUCCESS',
  LOAD_ANIME_LIST_FAILURE = '@animes/LOAD_ANIME_LIST_FAILURE'
}

export interface SetSeasonAction {
  type: typeof AnimesTypes.SET_SEASON,
  payload: { season: Season, year: number }
}

/**
 * Data Types
 */
export interface AnimesState {
  readonly animes: Anime[],
  readonly season: { name?: Season, year?: number, animes?: Anime[] },
  readonly isLoading: boolean,
  readonly hasError: boolean
}