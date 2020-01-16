import React, { Component } from 'react'
import { AnimeListElement } from '../../../domain/entities/AnimeListElement'
import DateUtils from '../../../domain/utils/DateUtils'
import AnimeCard from '../AnimeCard/AnimeCard'
import style from './style.module.scss'
import AnimeCardWireframe from '../AnimeCard/AnimeCardWireframe'

interface Props {
  animes: AnimeListElement[]
  isLoading: boolean
}

interface State {
  numberOfWireframeCards: number
}

export default class AnimeList extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      numberOfWireframeCards: 10
    }
  }
  formatDate (day: number, month: number, year: number) {
    return DateUtils.dateFromApiFormatToEnUS(day, month, year)
  }

  nextEpisodeDate (timestamp: number) {
    return DateUtils.formattedEnUSNextEpisodeAiringDate(timestamp)
  }

  buildCardWireframes (): JSX.Element {
    var cardWireframes: JSX.Element[] = []
    for (var i = 0; i < this.state.numberOfWireframeCards; i++) {
      cardWireframes.push(<AnimeCardWireframe />)
    }

    return (
      <ul className={style.component}>
        { cardWireframes.map((wireframe, index) => <li key={index}>{ wireframe }</li>) }
      </ul>
    )
  }

  render () {
    const { animes } = this.props

    if (this.props.isLoading) {
      return this.buildCardWireframes()
    }

    return (
      <ul className={style.component}>
        { animes.map(anime => 
          <li key={ anime.id }>
            <AnimeCard
              animeId={ anime.id }
              coverImageUrl={ anime.coverImage.large }
              title={ anime.title.romaji }
              subtitle={ anime.studios.nodes?.length ? anime.studios.nodes[0].name : '' } />
          </li>
        )}
      </ul>
    )
  }
}