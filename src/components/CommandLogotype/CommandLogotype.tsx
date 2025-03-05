import { FC } from 'react'

import classes from './styles.module.scss'
import BaseIcon from '../Icons/BaseIcon/BaseIcon'
import { clsx } from 'clsx'

type Props = {
  logotype: string
  nameCommand: string
}

const CommandLogotype: FC<Props> = ({ logotype, nameCommand }) => {
  return (
    <div className={classes['command-logotype']}>
      <BaseIcon
        source={logotype}
        className={clsx(classes['command-logotype__img'])}
      />{' '}
      <p>{nameCommand}</p>
    </div>
  )
}

export default CommandLogotype
