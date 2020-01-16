import React from 'react'

interface Props {
  number: number
  className: string
  onClick: (bulletNumber: number) => void
}

const BulletButton: React.FC<Props> = props => {
  const onClick = () => {
    props.onClick(props.number)
  }

  return (
    <button className={props.className} onClick={onClick}></button>
  )
}

export default BulletButton
