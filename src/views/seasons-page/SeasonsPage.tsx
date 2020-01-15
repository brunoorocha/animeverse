import React from "react"
import { Season, SeasonUtils } from '../../domain/entities/Season'
import { AnimeListElement } from '../../domain/entities/AnimeListElement'
import { AnimesList, PageContent, TabBar, TabItem, VSpacer, WideCarousel, WideCarouselItem } from '../../components/shared'

interface StateProps {
  season: {
    name?: Season,
  }
  mostPopular?: AnimeListElement[]
  animes?: AnimeListElement[]
}

interface DispatchProps {
  setSeason (season: Season, year: number): void
  loadMostPopular (): void
}

type Props = StateProps & DispatchProps

export default class SeasonsPage extends React.Component<Props> {
  activeTabDidChange = (activeTabName: string) => {
    const currentYear = new Date().getFullYear()
    const season = SeasonUtils.seasonFromRawValue(activeTabName)
    if (season) {
      this.props.setSeason(season, currentYear)
    }
  }

  componentDidMount () {
    const currentYear = new Date().getFullYear()
    this.props.setSeason(SeasonUtils.currentSeason(), currentYear)
    this.props.loadMostPopular()
  }

  render () {
    return (
      <div>
        <WideCarousel>
          {
            this.props.mostPopular?.filter((anime, index) => index === 0 ? anime : undefined).map(anime =>
              <WideCarouselItem
                key={ anime.id }
                imageUrl={ anime.bannerImage || '' }
                title={ anime.title.romaji } />
            )
          }
        </WideCarousel>

        <PageContent>
          <h5>seasons</h5>
          <TabBar onTabChange={this.activeTabDidChange}>
            <TabItem name={Season.WINTER} isActive>Winter</TabItem>
            <TabItem name={Season.SPRING}>Spring</TabItem>
            <TabItem name={Season.SUMMER}>Summer</TabItem>
            <TabItem name={Season.FALL}>Fall</TabItem>
          </TabBar>

          <VSpacer />
          <AnimesList animes={ this.props.animes || [] } />
        </PageContent>
      </div>
    )
  }
}