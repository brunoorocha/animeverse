
import { call, put, select } from 'redux-saga/effects'
import AnimesUseCases from '../../../domain/use-cases/animes/AnimesUseCases'
import { graphiQLApiService } from '../../../services/GraphiQLApiService'
import { loadAnimesSuccess, loadAnimesFailure, loadAnimesOfASeasonSuccess } from './actions'
import { ApplicationState } from '../../'

export function* loadAnimes () {
  try {
    const useCases = new AnimesUseCases(graphiQLApiService)
    const response = yield call(useCases.getAnimes)
    yield put(loadAnimesSuccess(response))
  }
  catch (error) {
    yield put(loadAnimesFailure())
  }
}

export function* loadAnimesOfASeason () {
  try {
    const state: ApplicationState = yield select(state => state)
    const useCases = new AnimesUseCases(graphiQLApiService)
    const name = state.animes.season.name ? state.animes.season.name.toString() : ''
    const year = state.animes.season.year ? state.animes.season.year : new Date().getFullYear()
    const response = yield call(useCases.getAnimesOfSeason, name, year)
    yield put(loadAnimesOfASeasonSuccess(response))
  }
  catch (error) {
    yield put(loadAnimesFailure())
  }
}