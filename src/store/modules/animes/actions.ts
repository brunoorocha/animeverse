import { action } from 'typesafe-actions'
import { AnimesTypes } from './types'
import { Anime } from '../../../domain/entities/Anime'

export const loadAnimes = () => action(AnimesTypes.LOAD_ANIME_LIST);

export const loadAnimesSuccess = (animes: Anime[]) => action(AnimesTypes.LOAD_ANIME_LIST_SUCCESS, { animes });

export const loadAnimesFailure = () => action(AnimesTypes.LOAD_ANIME_LIST_FAILURE);
