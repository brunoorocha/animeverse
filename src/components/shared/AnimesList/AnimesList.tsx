import React, { Component } from 'react'
import { Anime } from '../../../domain/entities/Anime'
import DateUtils from '../../../domain/utils/DateUtils'
import AnimeCard from '../AnimeCard/AnimeCard'
import style from './style.module.scss'

interface Props {
  animes: Anime[]
}

export default class AnimeList extends Component<Props> {
  formatDate (day: number, month: number, year: number) {
    return DateUtils.dateFromApiFormatToEnUS(day, month, year)
  }

  nextEpisodeDate (timestamp: number) {
    return DateUtils.formattedEnUSNextEpisodeAiringDate(timestamp)
  }

  render () {
    const { animes } = this.props

    return (
      <ul className={style.component}>
        { animes.map(anime => 
          <li key={ anime.id }>
            <AnimeCard
              coverImageUrl={ anime.coverImage.large }
              title={ anime.title.romaji } />
          </li>
        )}
      </ul>
    )
  }
}