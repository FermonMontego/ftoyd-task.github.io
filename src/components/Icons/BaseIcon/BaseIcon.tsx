import { FC, memo } from 'react'

type Props = {
  source: string
  alt?: string
  className?: string
  onClick?: () => void
}

const BaseIcon: FC<Props> = ({ source, alt = 'icon', className, onClick }) => {
  return <img src={source} alt={alt} className={className} onClick={onClick} />
}

export default memo(BaseIcon)
