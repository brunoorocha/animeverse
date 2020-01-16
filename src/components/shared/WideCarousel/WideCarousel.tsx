import React from 'react'
import Bullets from './Bullets'
import PageContent from '../PageContent/PageContent'
import style from './style.module.scss'

interface Props {
  children: JSX.Element[],
  speed: number
}

const WideCarousel = (props: Props) => {
  const [current, setCurrent] = React.useState(0)

  const nextSlide = () => {
    const slidesCount = props.children.length
    const next = (current + 1) % slidesCount
    setCurrent(next)
  }

  const goToSlide = (slideNumber: number) => {
    const slidesCount = props.children.length
    if (slideNumber >= 0 && slideNumber < slidesCount) {
      setCurrent(slideNumber)
    }
  }

  React.useEffect(() => {
    const timeOutId = setTimeout(nextSlide, props.speed)

    return function () {
      clearTimeout(timeOutId)
    }
  })

  return (
    <React.Fragment>
      <div className={style.wide_carousel}>
        { props.children.map((slide, index) => (
          <div 
            className={current === index ? style.slide_wrapper +' '+ style.current_slide : style.slide_wrapper}
            key={index}>
              { slide }
          </div>
        )) }
      </div>

      <PageContent>
        <Bullets numberOfBullets={props.children.length} current={current} onBulletSelected={goToSlide} />
      </PageContent>
    </React.Fragment>
  )
}

export default WideCarousel
