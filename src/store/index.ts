import { createStore, Store } from 'redux'
import rootReducer from './modules/rootReducer'
import { AnimesState } from './modules/animes/types'

export interface ApplicationState {
  animes: AnimesState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store
