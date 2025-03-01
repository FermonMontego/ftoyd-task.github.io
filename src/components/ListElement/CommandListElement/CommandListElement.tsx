import React, { FC, ReactElement } from 'react'
import CommandLogotype from '../../CommandLogotype/CommandLogotype'
import clsx from 'clsx'

import styles from './styles.module.scss'
import BaseCardStatus, {
  MatchStatusesType,
} from '../../CardStatus/BaseCardStatus/BaseCardStatus'

type Props = {
  nameCommand: string
  logotype: ReactElement
  statusMatch?: MatchStatusesType
  homeScore?: number
  awayScore?: number
}

const CommandListElement: FC<Props> = ({
  nameCommand,
  logotype,
  statusMatch,
  homeScore,
  awayScore,
}) => {
  return (
    <div className={clsx(styles['command-list-element'])}>
      <CommandLogotype logotype={logotype} nameCommand={nameCommand} />
      <div className={styles['command-list-element__wrapper-score']}>
        <p>
          {homeScore} {':'} {awayScore}
        </p>
        <BaseCardStatus status={statusMatch} />
      </div>
      <CommandLogotype logotype={logotype} nameCommand={nameCommand} />
    </div>
  )
}

export default CommandListElement
