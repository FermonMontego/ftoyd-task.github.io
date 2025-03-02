import { FC } from 'react'

type Props = {
  source: string
  alt?: string
  className?: string
}

const BaseIcon: FC<Props> = ({ source, alt = 'icon', className }) => {
  return <img src={source} alt={alt} className={className} />
}

export default BaseIcon
