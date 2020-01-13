import { action } from 'typesafe-actions'
import { AnimesTypes } from './types'
import { AnimeListElement } from '../../../domain/entities/AnimeListElement'
import { Season } from '../../../domain/entities/Season';

export const loadAnimes = () => action(AnimesTypes.LOAD_ANIME_LIST);

export const setSeason = (season: Season, year: number) => action(AnimesTypes.SET_SEASON, { season, year })

export const loadAnimesSuccess = (animes: AnimeListElement[]) => action(AnimesTypes.LOAD_ANIME_LIST_SUCCESS, { animes });

export const loadAnimesFailure = () => action(AnimesTypes.LOAD_ANIME_LIST_FAILURE);
