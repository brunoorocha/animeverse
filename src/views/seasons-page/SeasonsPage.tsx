import React from "react"
import { Season, SeasonUtils } from '../../domain/entities/Season'
import { AnimeListElement } from '../../domain/entities/AnimeListElement'
import { AnimesList, PageContent, TabBar, TabItem, VSpacer, WideCarousel, WideCarouselItem } from '../../components/shared'

interface StateProps {
  season: { name?: Season }
  isLoading?: boolean
  mostPopular?: AnimeListElement[]
  animes?: AnimeListElement[]
}

interface DispatchProps {
  setSeason (season: Season, year: number): void
  loadMostPopular (): void
}

type Props = StateProps & DispatchProps

export default class SeasonsPage extends React.Component<Props> {
  constructor (props: Props) {
    super(props)
    this.activeTabDidChange = this.activeTabDidChange.bind(this)
  }

  activeTabDidChange (activeTabName: string) {
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
        {
          (this.props.mostPopular && this.props.mostPopular.length > 0) && 
            <WideCarousel speed={8000}>
              { this.props.mostPopular.map(anime =>
                  <WideCarouselItem
                    key={ anime.id }
                    imageUrl={ anime.bannerImage || '' }
                    title={ anime.title.romaji } />
              )}
            </WideCarousel>
        }

        <VSpacer />
        <PageContent>
          <h5>seasons</h5>
          <TabBar onTabChange={this.activeTabDidChange}>
            <TabItem name={Season.WINTER} isActive>Winter</TabItem>
            <TabItem name={Season.SPRING}>Spring</TabItem>
            <TabItem name={Season.SUMMER}>Summer</TabItem>
            <TabItem name={Season.FALL}>Fall</TabItem>
          </TabBar>

          <VSpacer />
          <AnimesList
            isLoading={ this.props.isLoading! }
            animes={ this.props.animes || [] } />
        </PageContent>

        <VSpacer />
      </div>
    )
  }
}
