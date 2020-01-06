import { Anime } from "../../../domain/entities/Anime";

/**
 * Action Types
 */
export enum AnimesTypes {
  LOAD_ANIME_LIST = '@animes/LOAD_ANIME_LIST',
  LOAD_ANIME_LIST_SUCCESS = '@animes/LOAD_ANIME_LIST_SUCCESS',
  LOAD_ANIME_LIST_FAILURE = '@animes/LOAD_ANIME_LIST_FAILURE'
}

/**
 * Data Types
 */
export interface AnimesState {
  readonly animes: Anime[],
  readonly isLoading: boolean,
  readonly hasError: boolean
}