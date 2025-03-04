import clsx from 'clsx'
import {
  CSSProperties,
  FC,
  Fragment,
  memo,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useMemo,
} from 'react'

import RefreshIcon from '../../../assets/icons/refresh.svg'

import classes from './styles.module.scss'
import BaseIcon from '../../Icons/BaseIcon/BaseIcon'
import { v4 as uuidGenerate } from 'uuid'

export type ButtonIconType = {
  source: ReactElement
  position: 'left' | 'right'
  _id?: string
}

type Props = {
  type?: 'submit' | 'button' | 'reset'
  className?: string
  style?: CSSProperties
  disabled?: boolean
  icons?: ButtonIconType[]
  onClick?: () => void
  isLoading?: boolean
  loaderIcon?: ReactElement
} & PropsWithChildren

const BaseButton: FC<Props> = ({
  type,
  className,
  style,
  children,
  disabled,
  icons,
  onClick,
  isLoading,
  loaderIcon = <BaseIcon source={RefreshIcon} />,
}) => {
  const prepareIcons = useMemo(() => {
    return (
      (icons &&
        icons.map((icon) => ({
          ...icon,
          _id: uuidGenerate(),
        }))) ||
      []
    )
  }, [])

  const renderIcons = useCallback(
    (
      icons: ButtonIconType[],
      positionRender: ButtonIconType['position']
    ): ReactElement[] => {
      return icons
        .filter((icon) => icon.position === positionRender)
        .map((icon) => <Fragment key={icon._id}>{icon.source}</Fragment>)
    },
    []
  )

  return (
    <button
      type={type}
      className={clsx(className, classes['base-button'])}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {!isLoading && (
        <>
          {prepareIcons.length && renderIcons(prepareIcons, 'left')}
          {children}
          {prepareIcons.length && renderIcons(prepareIcons, 'right')}
        </>
      )}

      {isLoading && loaderIcon}
    </button>
  )
}

export default memo(BaseButton)
