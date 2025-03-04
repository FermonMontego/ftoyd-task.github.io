import { FC, useEffect, useRef } from 'react'

import styles from './styles.module.scss'

type Props = {
  number?: number
}

const AnimationNumber: FC<Props> = ({ number }) => {
  const prevNumberRef = useRef<number>(0)
  const numberWrapperElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clearAnimationDelay = setTimeout(() => {
      numberWrapperElement.current?.classList.remove(styles['animation-number'])
    }, 600)

    return () => clearTimeout(clearAnimationDelay)
  }, [number, prevNumberRef])

  useEffect(() => {
    if (number) {
      prevNumberRef.current = number
    }

    if (prevNumberRef.current === number) {
      numberWrapperElement.current?.classList.add(styles['animation-number'])
    }
  })

  return (
    <div
      ref={numberWrapperElement}
      className={
        prevNumberRef.current !== number ? styles['animation-number'] : ''
      }
    >
      {number}
    </div>
  )
}

export default AnimationNumber
