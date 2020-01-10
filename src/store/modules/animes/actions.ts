import { action } from 'typesafe-actions'
import { AnimesTypes } from './types'
import { Anime } from '../../../domain/entities/Anime'
import { Season } from '../../../domain/entities/Season';

export const loadAnimes = () => action(AnimesTypes.LOAD_ANIME_LIST);

export const setSeason = (season: Season) => action(AnimesTypes.SET_SEASON, { season })

export const loadAnimesOfASeasonSuccess = (animes: Anime[]) => action(AnimesTypes.LOAD_ANIMES_OF_A_SEASON, { animes });

export const loadAnimesSuccess = (animes: Anime[]) => action(AnimesTypes.LOAD_ANIME_LIST_SUCCESS, { animes });

export const loadAnimesFailure = () => action(AnimesTypes.LOAD_ANIME_LIST_FAILURE);
