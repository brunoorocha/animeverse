import React from 'react'
import BulletButton from './BulletButton'
import style from './style.module.scss'

interface Props {
  numberOfBullets: number,
  current: number
  onBulletSelected: (bulletNumber: number) => void
}

const Bullets: React.FC<Props> = props => {
  var bullets: JSX.Element[] = []

  for(var i = 0; i < props.numberOfBullets; i++) {
    bullets.push(
      <BulletButton
        className={props.current === i ? style.bullet +' '+ style.current : style.bullet}
        onClick={props.onBulletSelected}
        number={i}
        key={i} />
    )
  }

  return (
    <div className={style.bullets}>
      { bullets }
    </div>
  )
}

export default Bullets
