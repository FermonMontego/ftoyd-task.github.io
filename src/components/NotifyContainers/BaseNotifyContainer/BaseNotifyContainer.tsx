import clsx from 'clsx'
import { FC, ReactElement } from 'react'

import classes from './styles.module.scss'

type OptionsType = {
  title?: string
  content?: string
  icon?: ReactElement
}

type Props = {
  className?: string
  options: OptionsType
}

const BaseNotifyContainer: FC<Props> = ({ className, options }) => {
  return (
    <div className={clsx(classes['base-notify-container'], className)}>
      {options.icon} <p>{options.content}</p>
    </div>
  )
}

export default BaseNotifyContainer
