import { AnimesState, AnimesTypes } from './types'
import { Reducer } from 'redux'

const INITIAL_STATE: AnimesState = {
  animes: [
    // {
    //   id: 1,
    //   title: {
    //     romaji: 'Haikyuu!! TO THE TOP',
    //     english: 'Haikyuu!! TO THE TOP',
    //     native: 'ハイキュー!! TO THE TOP'
    //   },
    //   status: 'NOT_YET_RELEASED'
    // },
    // {
    //   id: 2,
    //   title: {
    //     romaji: 'Kyokou Suiri',
    //     english: 'In/Spectre',
    //     native: '虚構推理'
    //   },
    //   status: 'NOT_YET_RELEASED'
    // },
    // {
    //   id: 3,
    //   title: {
    //     romaji: 'Isekai Quartet 2',
    //     english: 'Isekai Quartet 2',
    //     native: '異世界かるてっと 2'
    //   },
    //   status: 'NOT_YET_RELEASED'
    // }
  ],
  isLoading: false,
  hasError: false
}

const reducer: Reducer<AnimesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AnimesTypes.LOAD_ANIME_LIST:
      return { ...state, isLoading: true }
    case AnimesTypes.LOAD_ANIME_LIST_SUCCESS:
      return { ...state, animes: action.payload.animes, isLoading: false, hasError: false }
    case AnimesTypes.LOAD_ANIME_LIST_FAILURE:
      return { ...state, isLoading: false, hasError: true }
    default:
      return state
  }
}

export default reducer