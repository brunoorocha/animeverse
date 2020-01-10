import React from "react"
import { Season, SeasonUtils } from '../../domain/entities/Season'
import { Anime } from '../../domain/entities/Anime'

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

export default class CurrentSeasonList extends React.Component<Props> {
  componentDidMount () {
    this.props.setSeason(SeasonUtils.currentSeason())
  }

  render () {
    return (
      <div>
        <h1>{ this.props.season.name }</h1>

        <ul>
          { this.props.season.animes?.map(
            anime => <li key={anime.id}>{ anime.title.romaji }</li> )}
        </ul>
      </div>
    )
  }
}