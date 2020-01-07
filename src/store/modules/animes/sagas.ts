
import { call, put } from 'redux-saga/effects'
import AnimesUseCases from '../../../domain/use-cases/animes/AnimesUseCases'
import { loadAnimesSuccess, loadAnimesFailure } from './actions'

export function* loadAnimes () {
  try {
    const response = yield call(AnimesUseCases.getAnimes)
    yield put(loadAnimesSuccess(response))
  }
  catch (error) {
    yield put(loadAnimesFailure())
  }
}