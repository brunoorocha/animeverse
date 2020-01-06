import { AnimesState, AnimesTypes } from './types'
import { Reducer } from 'redux'

const INITIAL_STATE: AnimesState = {
  animes: [],
  isLoading: false,
  hasError: false
}

const reducer: Reducer<AnimesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AnimesTypes.LOAD_ANIME_LIST:
      return { ...state, isLoading: true }
    case AnimesTypes.LOAD_ANIME_LIST_SUCCESS:
      return { ...state, animes: action.payload, isLoading: false, hasError: false }
    case AnimesTypes.LOAD_ANIME_LIST_FAILURE:
      return { ...state, isLoading: false, hasError: true }
    default:
      return state
  }
}

export default reducer