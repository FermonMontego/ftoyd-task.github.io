import React, { FC, useEffect } from 'react'

type Props = {
  number?: number
}

const AnimationNumber: FC<Props> = ({ number }) => {
  useEffect(() => {
    console.log(123)
  }, [number])
  return <div>{number}</div>
}

export default AnimationNumber
