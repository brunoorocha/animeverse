import React from 'react'
import style from './style.module.scss'

interface Props {
  children: JSX.Element[],
  speed: number
}

interface State {
  current: number
}

const WideCarousel = (props: Props) => {
  const [current, setCurrent] = React.useState(0)

  const nextSlide = () => {
    const slidesCount = props.children.length
    const next = (current + 1) % slidesCount
    setCurrent(next)
  }

  React.useEffect(() => {
    setTimeout(() => {
      nextSlide()
    }, props.speed)
  })

  return (
    <div className={style.wide_carousel}>
      { props.children.map((slide, index) => (
        <div 
          className={current === index ? style.slide_wrapper +' '+ style.current_slide : style.slide_wrapper}
          key={index}>
            { slide }
        </div>
      )) }
    </div>
  )
}

export default WideCarousel
