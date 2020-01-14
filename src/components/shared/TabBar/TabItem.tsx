import React from 'react'
import style from './style.module.scss'

interface Props {
  isActive: boolean
}

export default class TabItem extends React.Component<Props> {
  static defaultProps: Props = {
    isActive: false
  }

  render () {
    return (
      <div className={this.props.isActive ? style.tab_item +' '+ style.active : style.tab_item}>
        { this.props.children }
      </div>
    )
  }
}