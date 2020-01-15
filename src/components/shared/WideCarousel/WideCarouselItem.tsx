import React from 'react'
import styled from 'styled-components'
import PageContent from '../PageContent/PageContent'
import Button from '../Button/Button'
import style from './style.module.scss'

interface Props {
  imageUrl: string
  title: string
}

const GradientOverlay = styled.div`
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
`

const WideCarouselItem: React.FC<Props> = props => {
  return (
    <div className={style.wide_carousel_item}>
      <div className={style.content} style={{ backgroundImage: `url('${props.imageUrl}')` }}>
        <GradientOverlay>
          <PageContent>
            <h5>popular in this season</h5>
            <h1>{ props.title }</h1>

            <div>
              <Button text="See more" />
            </div>
          </PageContent>
        </GradientOverlay>
      </div>
    </div>
  )
}

export default WideCarouselItem
