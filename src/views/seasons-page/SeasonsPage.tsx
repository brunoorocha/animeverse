import React from "react"
import { Season, SeasonUtils } from '../../domain/entities/Season'
import { AnimeListElement } from '../../domain/entities/AnimeListElement'
import { AnimesList, PageContent } from '../../components/shared'

interface StateProps {
  season: {
    name?: Season,
  }
  animes?: AnimeListElement[]
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
        <PageContent>
          <h1>{ this.props.season.name }</h1>
          <AnimesList animes={ this.props.animes || [] } />
        </PageContent>
      </div>
    )
  }
}
