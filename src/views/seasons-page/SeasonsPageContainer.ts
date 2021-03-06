import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { ApplicationState } from '../../store'
import * as AnimesActions from '../../store/modules/animes/actions'

import SeasonsPage from './SeasonsPage'

const mapStateToProps = (state: ApplicationState) => ({
  season: state.animes.season,
  animes: state.animes.animes,
  mostPopular: state.animes.mostPopular,
  isLoading: state.animes.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AnimesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SeasonsPage)