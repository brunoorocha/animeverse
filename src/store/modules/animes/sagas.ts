
import { call, put } from 'redux-saga/effects'
import AnimesUseCases from '../../../domain/use-cases/animes/AnimesUseCases'
import { graphiQLApiService } from '../../../services/GraphiQLApiService'
import { loadAnimes, loadAnimesSuccess, loadAnimesFailure } from './actions'
import { SetSeasonAction } from './types'

export function* loadAnimesOfASeason (action: SetSeasonAction) {
  try {
    yield put(loadAnimes())
    const useCases = new AnimesUseCases(graphiQLApiService)
    const name = action.payload.season
    const year = action.payload.year
    const response = yield call(useCases.getAnimesOfSeason, name, year)
    yield put(loadAnimesSuccess(response))
  }
  catch (error) {
    yield put(loadAnimesFailure())
  }
}