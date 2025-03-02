import clsx from 'clsx'
import { FC, memo, PropsWithChildren } from 'react'

import classes from './styles.module.scss'

export enum ContainerSizes {
  EXTRA_LARGE = 1920,
  LARGE = 1440,
  MEDIUM = 991,
  SMALL = 410,
}

type ValueOf<T> = T[keyof T]

type Props = {
  className?: string
  size: ValueOf<typeof ContainerSizes>
} & PropsWithChildren

const BaseContainer: FC<Props> = ({
  className,
  children,
  size = ContainerSizes.EXTRA_LARGE,
}) => {
  return (
    <div className={clsx(className, classes[`base-container-${size}`])}>
      {children}
    </div>
  )
}

export default memo(BaseContainer)
