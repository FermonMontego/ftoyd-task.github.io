import clsx from 'clsx'
import {
  CSSProperties,
  FC,
  Fragment,
  memo,
  PropsWithChildren,
  ReactElement,
  useCallback,
} from 'react'

import RefreshIcon from '../../../assets/icons/refresh.svg'

import classes from './styles.module.scss'
import BaseIcon from '../../Icons/BaseIcon/BaseIcon'

type ButtonIconType = {
  source: ReactElement
  position: 'left' | 'right'
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
  const renderIcons = useCallback(
    (
      icons: ButtonIconType[],
      positionRender: ButtonIconType['position']
    ): ReactElement[] => {
      return icons
        .filter((icon) => icon.position === positionRender)
        .map((icon) => (
          <Fragment key={icon.position + `_${Math.random() * 1000}`}>
            {icon.source}
          </Fragment>
        ))
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
          {children} {icons && renderIcons(icons, 'right')}
        </>
      )}

      {isLoading && loaderIcon}
    </button>
  )
}

export default memo(BaseButton)
