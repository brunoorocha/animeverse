import React from 'react'
import style from './style.module.scss'

const TabBar: React.FC = props => {
  return (
    <div className={style.tab_bar}>
      { props.children }
    </div>
  )
}

export default TabBar