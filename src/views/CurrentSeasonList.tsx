import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { Anime } from '../domain/entities/Anime'
import { Season, SeasonUtils } from '../domain/entities/Season'

import { ApplicationState } from '../store'
import * as AnimesActions from '../store/modules/animes/actions'

interface StateProps {
  season: {
    name?: Season,
    animes?: Anime[]
  }
}

interface DispatchProps {
  setSeason (season: Season): void
}

type Props = StateProps & DispatchProps

class CurrentSeasonList extends React.Component<Props> {
  componentDidMount () {
    this.props.setSeason(SeasonUtils.currentSeason())
  }

  render () {
    return (
      <div>
        <h1>{ this.props.season.name }</h1>

        <ul>
          { this.props.season.animes?.map(anime => <li key={anime.id}>{ anime.title.romaji }</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  season: state.animes.season
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AnimesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CurrentSeasonList)