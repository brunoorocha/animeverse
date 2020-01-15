import React from 'react'
import style from './style.module.scss'
import PageContent from '../PageContent/PageContent'
import GradientOverlay from '../AnimeCard/GradientOverlay'

interface Props {
  imageUrl: string
  title: string
}

const WideCarouselItem: React.FC<Props> = props => {
  return (
    <div className={style.wide_carousel_item}>
      <div className={style.content} style={{ backgroundImage: `url('${props.imageUrl}')` }}>
        <GradientOverlay>
          <PageContent>
            <h1>{ props.title }</h1>
          </PageContent>
        </GradientOverlay>
      </div>
    </div>
  )
}

export default WideCarouselItem
