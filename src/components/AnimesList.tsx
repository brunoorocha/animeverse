import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { Anime } from '../domain/entities/Anime'

import { ApplicationState } from '../store'
import * as AnimesActions from '../store/modules/animes/actions'

interface StateProps {
  animes: Anime[]
}

interface DispatchProps {
  loadAnimes(): void
}

type Props = StateProps & DispatchProps

class AnimeList extends Component<Props> {
  componentDidMount () {
    const { loadAnimes } = this.props
    loadAnimes()
  }

  render () {
    const { animes } = this.props

    return <ul>
      { animes.map(anime => 
        <li key={ anime.id }>
          <p><b>{ anime.title.romaji }</b></p>
          <small>{ anime.title.native }</small>
        </li>) }
    </ul>
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  animes: state.animes.animes
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AnimesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AnimeList)