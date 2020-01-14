import React from 'react'
import style from './style.module.scss'

interface RequiredProps {
  name: string
}

interface DefaultProps {
  isActive: boolean
  onClick (tabItemName: string): void
}

type Props = RequiredProps & DefaultProps

export default class TabItem extends React.Component<Props> {
  static defaultProps: DefaultProps = {
    isActive: false,
    onClick: () => {}
  }

  onClick = () => {
    this.props.onClick(this.props.name)
  }

  render () {
    return (
      <label
        className={this.props.isActive ? style.tab_item +' '+ style.active : style.tab_item}
        onClick={this.onClick}>
        { this.props.children }
      </label>
    )
  }
}