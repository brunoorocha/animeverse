import { all, takeLatest } from 'redux-saga/effects'

import { AnimesTypes } from './animes/types'
import { loadAnimes, loadAnimesOfASeason } from './animes/sagas'

export default function* rootSaga() {
   return yield all([
     takeLatest(AnimesTypes.LOAD_ANIME_LIST, loadAnimes),
     takeLatest(AnimesTypes.SET_SEASON, loadAnimesOfASeason)
   ])
}