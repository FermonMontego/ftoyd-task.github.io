import { FC, ReactElement } from 'react'
import CommandLogotype from '../../CommandLogotype/CommandLogotype'
import clsx from 'clsx'

import styles from './styles.module.scss'
import BaseCardStatus, {
  MatchStatusesType,
} from '../../CardStatus/BaseCardStatus/BaseCardStatus'

type Props = {
  awayTeam?: any
  homeTeam?: any
  logotype: ReactElement
  statusMatch?: MatchStatusesType
  homeScore?: number
  awayScore?: number
}

const CommandListElement: FC<Props> = ({
  awayTeam,
  homeTeam,
  logotype,
  statusMatch,
  homeScore,
  awayScore,
}) => {
  return (
    <div className={clsx(styles['command-list-element'])}>
      <CommandLogotype logotype={logotype} nameCommand={awayTeam.name} />
      <div className={styles['command-list-element__wrapper-score']}>
        <p>
          {awayScore} {':'} {homeScore}
        </p>
        <BaseCardStatus status={statusMatch} />
      </div>
      <CommandLogotype logotype={logotype} nameCommand={homeTeam.name} />
    </div>
  )
}

export default CommandListElement
