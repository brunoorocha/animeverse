import { all, takeLatest } from 'redux-saga/effects'

import { AnimesTypes } from './animes/types'
import { loadAnimesOfASeason } from './animes/sagas'

export default function* rootSaga() {
   return yield all([
     takeLatest(AnimesTypes.SET_SEASON, loadAnimesOfASeason)
   ])
}