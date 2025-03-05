import { FC, memo, useState } from 'react'
import CommandLogotype from '../../CommandLogotype/CommandLogotype'
import clsx from 'clsx'

import styles from './styles.module.scss'
import BaseCardStatus, {
  MatchStatusesType,
} from '../../CardStatus/BaseCardStatus/BaseCardStatus'

import ChevronUp from '../../../assets/icons/chevron-up.svg'

import AnimationNumber from '../../Animation/AnimationNumber/AnimationNumber'
import BaseIcon from '../../Icons/BaseIcon/BaseIcon'

import CommandLogotypeIcon from '../../../assets/icons/command-logo.svg'
import CommandComposition from '../../CommandComposition/CommandComposition'

type Props = {
  awayTeam?: any
  homeTeam?: any
  statusMatch?: MatchStatusesType
  homeScore?: number
  awayScore?: number
}

const CommandListElement: FC<Props> = ({
  awayTeam,
  homeTeam,
  statusMatch,
  homeScore,
  awayScore,
}) => {
  const [showCommandStat, setShowCommandStat] = useState<boolean>(false)

  return (
    <div className={clsx(styles['command-list-element'])}>
      <div className={styles['command-list-element__wrapper-dropdown']}>
        <div className={styles['command-list-element__wrapper-statistic']}>
          <CommandLogotype
            logotype={CommandLogotypeIcon}
            nameCommand={awayTeam?.name}
          />
          <div className={styles['command-list-element__wrapper']}>
            <div className={styles['command-list-element__score']}>
              <AnimationNumber number={awayScore} />
              {':'}
              <AnimationNumber number={homeScore} />
            </div>
            <BaseCardStatus status={statusMatch} />
          </div>
          <CommandLogotype
            logotype={CommandLogotypeIcon}
            nameCommand={homeTeam?.name}
          />
        </div>
        <BaseIcon
          onClick={() => setShowCommandStat((prev) => !prev)}
          source={ChevronUp}
          alt="chevron"
          className={clsx(styles['command-list-element__icon-chevron'], {
            [styles['command-list-element__icon-chevron__active']]:
              showCommandStat,
          })}
        />
      </div>

      {showCommandStat && (
        <div
          className={clsx(styles['command-list-element__wrapper-command-stat'])}
        >
          <CommandComposition commandData={awayTeam} />
          <div className={clsx(styles['command-list-element__divider'])}>
            <div
              className={clsx(styles['command-list-element__divider__stamp'])}
            >
              VS
            </div>
          </div>
          <CommandComposition commandData={homeTeam} />
        </div>
      )}
    </div>
  )
}

export default memo(CommandListElement)
