import { CSSProperties, FC, memo } from 'react'

type Props = {
  source: string
  alt?: string
  className?: string
  onClick?: () => void
  styles?: CSSProperties
}

const BaseIcon: FC<Props> = ({
  source,
  alt = 'icon',
  className,
  onClick,
  styles,
}) => {
  return (
    <img
      src={source}
      alt={alt}
      className={className}
      onClick={onClick}
      style={styles}
    />
  )
}

export default memo(BaseIcon)
