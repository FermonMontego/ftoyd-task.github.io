import clsx from 'clsx'
import { FC } from 'react'

import classes from './styles.module.scss'

export type MatchStatusesType = 'Scheduled' | 'Ongoing' | 'Finished'

type Props = {
  status?: MatchStatusesType
}

const statusesList = {
  Scheduled: 'Match preparing',
  Finished: 'Finished',
  Ongoing: 'Live',
}

const prepareStatuses = (status: MatchStatusesType) => {
  return statusesList[status]
}

const BaseCardStatus: FC<Props> = ({ status = 'Scheduled' }) => {
  return (
    <div
      className={clsx(
        classes[`base-card-status`],
        classes[`base-card-status__${status}`]
      )}
    >
      {prepareStatuses(status)}
    </div>
  )
}

export default BaseCardStatus
