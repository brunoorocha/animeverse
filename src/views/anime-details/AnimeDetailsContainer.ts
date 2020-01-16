import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { ApplicationState } from '../../store'
import * as AnimesActions from '../../store/modules/animes/actions'

import AnimeDetails from './AnimeDetails'

const mapStateToProps = (state: ApplicationState) => ({
  anime: state.animes.detailedAnime
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AnimesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AnimeDetails)