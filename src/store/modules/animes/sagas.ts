
import { call, put } from 'redux-saga/effects'
import AnimesUseCases from '../../../domain/use-cases/animes/AnimesUseCases'
import { graphiQLApiService } from '../../../services/GraphiQLApiService'
import { loadAnimesFailure, loadAnimesOfASeasonSuccess } from './actions'
import { SetSeasonAction } from './types'

export function* loadAnimesOfASeason (action: SetSeasonAction) {
  try {
    const useCases = new AnimesUseCases(graphiQLApiService)
    const name = action.payload.season
    const year = action.payload.year
    const response = yield call(useCases.getAnimesOfSeason, name, year)
    yield put(loadAnimesOfASeasonSuccess(response))
  }
  catch (error) {
    yield put(loadAnimesFailure())
  }
}