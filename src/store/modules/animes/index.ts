import { AnimesState, AnimesTypes } from './types'
import { Reducer } from 'redux'

const INITIAL_STATE: AnimesState = {
  animes: [],
  season: {},
  isLoading: false,
  hasError: false
}

const reducer: Reducer<AnimesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AnimesTypes.LOAD_ANIME_LIST:
      return { ...state, isLoading: true }

    case AnimesTypes.SET_SEASON:
      return { ...state, season: { name: action.payload.season }}
    
    case AnimesTypes.LOAD_ANIMES_OF_A_SEASON: 
      return { ...state, season: { name: state.season?.name, animes: action.payload.season }, isLoading: false, hasError: false }

    case AnimesTypes.LOAD_ANIME_LIST_SUCCESS:
      return { ...state, animes: action.payload.animes, isLoading: false, hasError: false }

    case AnimesTypes.LOAD_ANIME_LIST_FAILURE:
      return { ...state, isLoading: false, hasError: true }

    default:
      return state
  }
}

export default reducer