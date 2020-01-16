
import { call, put } from 'redux-saga/effects'
import AnimesUseCases from '../../../domain/use-cases/animes/AnimesUseCases'
import { graphiQLApiService } from '../../../services/GraphiQLApiService'
import { loadAnimes, loadAnimesSuccess, loadAnimesFailure, loadMostPopularSuccess, loadAnimeSuccess } from './actions'
import { SetSeasonAction, LoadAnimeAction } from './types'
import { SeasonUtils } from '../../../domain/entities/Season'

export function* loadAnimesOfASeason (action: SetSeasonAction) {
  try {
    yield put(loadAnimes())
    const useCases = new AnimesUseCases(graphiQLApiService)
    const season = action.payload.season
    const year = action.payload.year
    const response = yield call(useCases.getAnimesOfSeason, season, year)
    yield put(loadAnimesSuccess(response))
  }
  catch (error) {
    yield put(loadAnimesFailure())
  }
}

export function* loadTheFiveMostPopularOfThisSeason () {
  try {
    const useCases = new AnimesUseCases(graphiQLApiService)
    const season = SeasonUtils.currentSeason()
    const year = new Date().getFullYear()
    const response = yield call(useCases.getTheFiveMostPopularOfASeason, season, year)
    yield put(loadMostPopularSuccess(response))
  }
  catch (error) {
    yield put(loadAnimesFailure())
  }
}

export function* loadAnimeWithId (action: LoadAnimeAction) {
  try {
    const useCases = new AnimesUseCases(graphiQLApiService)
    const { animeId } = action.payload
    const anime = yield call(useCases.getAnimeWithId, animeId)
    yield put(loadAnimeSuccess(anime))
  }
  catch (error) {
    yield put(loadAnimesFailure())
  }
}
