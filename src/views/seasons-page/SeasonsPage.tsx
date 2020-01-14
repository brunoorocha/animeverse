import React from "react"
import { Season, SeasonUtils } from '../../domain/entities/Season'
import { AnimeListElement } from '../../domain/entities/AnimeListElement'
import { AnimesList, PageContent, TabBar, TabItem, VSpacer } from '../../components/shared'

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
          <h5>seasons</h5>
          <TabBar>
            <TabItem isActive>Winter</TabItem>
            <TabItem>Spring</TabItem>
            <TabItem>Summer</TabItem>
            <TabItem>Fall</TabItem>
          </TabBar>

          <VSpacer />
          <AnimesList animes={ this.props.animes || [] } />
        </PageContent>
      </div>
    )
  }
}
