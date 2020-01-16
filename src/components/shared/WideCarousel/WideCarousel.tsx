import React from 'react'
import style from './style.module.scss'

interface Props {
  children: JSX.Element[],
  speed: number
}

interface State {
  current: number
}

export default class WideCarousel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      current: 0
    }

    this.changeCurrentVisibleSlide = this.changeCurrentVisibleSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
  }

  componentDidMount () {
    setTimeout(this.changeCurrentVisibleSlide, this.props.speed)
  }

  nextSlide () {
    const { current } = this.state
    const slidesCount = this.props.children.length
    const next = (current + 1) % slidesCount
    this.setState({ current: next })
  }

  changeCurrentVisibleSlide () {
    this.nextSlide()
    setTimeout(this.changeCurrentVisibleSlide, this.props.speed)
  }

  render () {
    return (
      <div className={style.wide_carousel}>
        { this.props.children.map((slide, index) => (
          <div 
            className={this.state.current === index ? style.slide_wrapper +' '+ style.current_slide : style.slide_wrapper}
            key={index}>
              { slide }
          </div>
        )) }
      </div>
    )
  }
}