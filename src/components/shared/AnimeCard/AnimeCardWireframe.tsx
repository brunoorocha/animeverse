import React from 'react'
import style from './style.module.scss'

const AnimeCardWireframe: React.FC = props => {
  return (
    <div className={style.card_wireframe}>
      <div className={style.cover}></div>

      <div className={style.overlay}>
        <div className={style.title}></div>
        <div className={style.subtitle}></div>
      </div>
    </div>
  )
}

export default AnimeCardWireframe