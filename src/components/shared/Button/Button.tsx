import React from 'react'
import { ChevronRight } from 'react-feather'
import style from './style.module.scss'

interface Props {
  text: string
}

const Button: React.FC<Props> = props => {
  return (
    <button className={style.button}>
      { props.text }
      <ChevronRight className={style.icon} />
    </button>
  )
}

export default Button