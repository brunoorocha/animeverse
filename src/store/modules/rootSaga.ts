import { all, takeLatest } from 'redux-saga/effects'

import { AnimesTypes } from './animes/types'
import { loadAnimesOfASeason, loadTheFiveMostPopularOfThisSeason, loadAnimeWithId } from './animes/sagas'

export default function* rootSaga() {
   return yield all([
     takeLatest(AnimesTypes.LOAD_ANIME, loadAnimeWithId),
     takeLatest(AnimesTypes.SET_SEASON, loadAnimesOfASeason),
     takeLatest(AnimesTypes.LOAD_MOST_POPULAR, loadTheFiveMostPopularOfThisSeason)
   ])
}