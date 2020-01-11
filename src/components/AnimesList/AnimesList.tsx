import React, { Component } from 'react'
import { Anime } from '../../domain/entities/Anime'
import DateUtils from '../../domain/utils/DateUtils'
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
            <div className={style.cover}>
              <img src={ anime.coverImage.large } alt={ `Cover of anime ${anime.title.romaji}` } />
            </div>

            <p><b>{ anime.title.romaji }</b></p>
            { 
              anime.nextAiringEpisode 
                ? <small>{ `Next episode airing ${ this.nextEpisodeDate(anime.nextAiringEpisode.airingAt) }` }</small>
                : <small>Next episode date unknow</small>
            }
          </li>
        )}
      </ul>
    )
  }
}