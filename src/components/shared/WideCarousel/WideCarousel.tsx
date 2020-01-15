import React from 'react'
import style from './style.module.scss'

export default class WideCarousel extends React.Component {
  render () {
    return (
      <div className={style.wide_carousel}>
        { this.props.children }
      </div>
    )
  }
}