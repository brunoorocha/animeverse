import React, { Component } from 'react'
import { Anime } from '../../domain/entities/Anime'
import style from './style.module.scss'

interface Props {
  animes: Anime[]
}

export default class AnimeList extends Component<Props> {
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
            <small>{ anime.title.native }</small>
          </li>
        )}
      </ul>
    )
  }
}