
import { call, put } from 'redux-saga/effects'
import AnimesUseCases from '../../../domain/use-cases/animes/AnimesUseCases'
import { graphiQLApiService } from '../../../services/GraphiQLApiService'
import { loadAnimesSuccess, loadAnimesFailure } from './actions'

export function* loadAnimes () {
  try {
    const useCases = new AnimesUseCases(graphiQLApiService)
    const response = yield call(useCases.getAnimes)
    yield put(loadAnimesSuccess(response))
  }
  catch (error) {
    debugger
    yield put(loadAnimesFailure())
  }
}