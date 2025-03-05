import { FC } from 'react'

import classes from './styles.module.scss'
import clsx from 'clsx'

type Props = {
  commandData: any
}

const CommandStatistic: FC<Props> = ({ commandData }) => {
  console.log(commandData, 'commandData')
  return (
    <div className={clsx(classes['command-statistic'])}>
      <div className={clsx(classes['command-statistic__label-stats'])}>
        Points: <span>{commandData.points}</span>
      </div>
      <div className={clsx(classes['command-statistic__label-stats'])}>
        Место: <span>{commandData?.place}</span>
      </div>
      <div className={clsx(classes['command-statistic__label-stats'])}>
        Всего Убийств: <span>{commandData?.total_kills}</span>
      </div>
    </div>
  )
}

export default CommandStatistic
