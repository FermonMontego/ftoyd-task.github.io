import { FC } from 'react'

import classes from './styles.module.scss'
import clsx from 'clsx'
import AnimationNumber from '../../../Animation/AnimationNumber/AnimationNumber'

type Props = {
  commandData: any
}

const CommandStatistic: FC<Props> = ({ commandData }) => {
  return (
    <div className={clsx(classes['command-statistic'])}>
      <div className={clsx(classes['command-statistic__label-stats'])}>
        Points:{' '}
        <span>
          <AnimationNumber number={commandData.points} />
        </span>
      </div>
      <div className={clsx(classes['command-statistic__label-stats'])}>
        Место:{' '}
        <span>
          <AnimationNumber number={commandData?.place} />
        </span>
      </div>
      <div className={clsx(classes['command-statistic__label-stats'])}>
        Всего Убийств:{' '}
        <span>
          <AnimationNumber number={commandData?.total_kills} />
        </span>
      </div>
    </div>
  )
}

export default CommandStatistic
