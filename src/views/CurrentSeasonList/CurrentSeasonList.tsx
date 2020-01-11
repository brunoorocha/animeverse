import React from "react"
import { Season, SeasonUtils } from '../../domain/entities/Season'
import { Anime } from '../../domain/entities/Anime'
import AnimesList from '../../components/AnimesList/'

interface StateProps {
  season: {
    name?: Season,
    animes?: Anime[]
  }
}

interface DispatchProps {
  setSeason (season: Season, year: number): void
}

type Props = StateProps & DispatchProps

export default class CurrentSeasonList extends React.Component<Props> {
  componentDidMount () {
    const currentYear = new Date().getFullYear()
    this.props.setSeason(SeasonUtils.currentSeason(), currentYear)
  }

  render () {
    return (
      <div>
        <h1>{ this.props.season.name }</h1>
        <AnimesList animes={ this.props.season.animes || [] } />
      </div>
    )
  }
}
