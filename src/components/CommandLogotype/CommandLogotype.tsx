import { FC } from 'react'

import classes from './styles.module.scss'
import BaseIcon from '../Icons/BaseIcon/BaseIcon'
import { clsx } from 'clsx'

type Props = {
  logotype: string
  nameCommand: string
  position?: 'right' | 'left'
}

const CommandLogotype: FC<Props> = ({
  logotype,
  nameCommand,
  position = 'left',
}) => {
  return (
    <div className={classes['command-logotype']}>
      {position === 'left' && (
        <BaseIcon
          source={logotype}
          className={clsx(classes['command-logotype__img'])}
        />
      )}
      <p>{nameCommand}</p>
      {position === 'right' && (
        <BaseIcon
          source={logotype}
          className={clsx(classes['command-logotype__img'])}
        />
      )}
    </div>
  )
}

export default CommandLogotype
