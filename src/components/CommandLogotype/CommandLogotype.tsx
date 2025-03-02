import { FC, ReactElement } from 'react'

import classes from './styles.module.scss'

type Props = {
  logotype: ReactElement
  nameCommand: string
}

const CommandLogotype: FC<Props> = ({ logotype, nameCommand }) => {
  return (
    <div className={classes['command-logotype']}>
      {logotype} <p>{nameCommand}</p>
    </div>
  )
}

export default CommandLogotype
