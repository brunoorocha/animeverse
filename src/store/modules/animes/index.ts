import { AnimesState, AnimesTypes } from './types'
import { Reducer } from 'redux'

const INITIAL_STATE: AnimesState = {
  animes: [],
  mostPopular: [],
  season: {},
  isLoading: false,
  hasError: false
}

const reducer: Reducer<AnimesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AnimesTypes.SET_SEASON:
      return { ...state, season: { name: action.payload.season, year: action.payload.year }}

    case AnimesTypes.LOAD_ANIME_LIST:
      return { ...state, isLoading: true }

    case AnimesTypes.LOAD_ANIME_LIST_SUCCESS:
      return { ...state, animes: action.payload.animes, isLoading: false, hasError: false }

    case AnimesTypes.LOAD_ANIME_LIST_FAILURE:
      return { ...state, isLoading: false, hasError: true }

    case AnimesTypes.LOAD_MOST_POPULAR:
      return { ...state }

    case AnimesTypes.LOAD_MOST_POPULAR_SUCCESS:
      return { ...state, mostPopular: action.payload.animes }

    case AnimesTypes.LOAD_ANIME:
      return { ...state }

    case AnimesTypes.LOAD_ANIME_SUCCESS:
      return { ...state, detailedAnime: action.payload.anime }

    default:
      return state
  }
}

export default reducer