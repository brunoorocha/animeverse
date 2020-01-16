import React from 'react'
import { Link } from 'react-router-dom'
import GradientOverlay from './GradientOverlay'
import style from './style.module.scss'

interface Props {
  coverImageUrl: string
  title: string
  subtitle: string
  animeId: number
}

const AnimeCard: React.FC<Props> = (props) => {
  return (
    <Link to={`/details/${props.animeId}`}>
      <div className={style.card}>
        <div className={style.cover}>
          <img src={ props.coverImageUrl } alt={ `Cover of anime ${ props.title }` } />
        </div>

        <GradientOverlay className={style.overlay}>
          <h4 className={style.title}>{ props.title }</h4>
          <span className={style.subtitle}>{ props.subtitle }</span>
        </GradientOverlay>
      </div>
    </Link>
  )
}

export default AnimeCard