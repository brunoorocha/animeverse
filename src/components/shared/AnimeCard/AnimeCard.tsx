import React from 'react'
import style from './style.module.scss'

interface Props {
  coverImageUrl: string
  title: string
}

const AnimeCard: React.FC<Props> = (props) => {
  return (
    <div>
      <div className={style.cover}>
        <img src={ props.coverImageUrl } alt={ `Cover of anime ${ props.title }` } />
      </div>

      <p><b>{ props.title }</b></p>
    </div>
  )
}

export default AnimeCard