import React from 'react'
import style from './style.module.scss'
import { TabItem } from '..'

interface Props {
  children: JSX.Element[]
  onTabChange (activeTabName: string): void
}

interface State {
  tabActive: string
}

export default class TabBar extends React.Component<Props, State> {
  static defaultProps: Props = {
    children: [],
    onTabChange: () => {}
  }

  constructor (props: Props) {
    super(props)

    this.state = {
      tabActive: this.props.children[0].props.name
    }
  }

  onTabItemClick = (tabItemName: string) => {
    this.setState({ tabActive: tabItemName })
    this.props.onTabChange(tabItemName)
  }

  render () {
    return (
      <div className={style.tab_bar}>
        { this.props.children.map((tab, index) => {
          const { name } = tab.props

          return (
            <TabItem
              name={name}
              isActive={this.state.tabActive === name}
              onClick={this.onTabItemClick}
              key={index}>
                { tab.props.children }
            </TabItem>
          )
        }) }
      </div>
    )
  }
}
