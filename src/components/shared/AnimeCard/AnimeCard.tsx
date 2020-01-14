import React from 'react'
import GradientOverlay from './GradientOverlay'
import style from './style.module.scss'

interface Props {
  coverImageUrl: string
  title: string
}

const AnimeCard: React.FC<Props> = (props) => {
  return (
    <div className={style.card}>
      <div className={style.cover}>
        <img src={ props.coverImageUrl } alt={ `Cover of anime ${ props.title }` } />
      </div>

      <GradientOverlay className={style.overlay}>
        <h4 className={style.title}>{ props.title }</h4>
        <span className={style.subtitle}>Kyoto Animation</span>
      </GradientOverlay>
    </div>
  )
}

export default AnimeCard