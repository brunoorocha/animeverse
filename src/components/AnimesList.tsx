import React, { Component } from 'react'

import { Anime } from '../domain/entities/Anime'

interface Props {
  animes: Anime[]
}

export default class AnimeList extends Component<Props> {
  render () {
    const { animes } = this.props

    return (
      <ul>
        { animes.map(anime => 
          <li key={ anime.id }>
            <img src={ anime.coverImage.medium } alt={ `Cover of anime ${anime.title.romaji}` } />
            <p><b>{ anime.title.romaji }</b></p>
            <small>{ anime.title.native }</small>
          </li>
        )}
      </ul>
    )
  }
}