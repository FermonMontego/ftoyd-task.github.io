import { FC, PropsWithChildren, useCallback, useState } from 'react'
import Context from './Context'
import { fetcher } from '../../api/fetcher'

type Props = {} & PropsWithChildren

const Provider: FC<Props> = ({ children }) => {
  const [matches, setMatches] = useState<any[]>([])
  const [hasError, setHasError] = useState<boolean>(false)
  const [isLoading, setIsLoadind] = useState<boolean>(false)

  const loadMatchesHandler = useCallback(async () => {
    setIsLoadind(true)
    fetcher('GET', '/fronttemp')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res)
        setMatches(res.data.matches)
      })
      .catch((err) => setHasError(true))
      .finally(() => {
        setIsLoadind(false)
      })
  }, [])

  return (
    <Context.Provider
      value={{
        matches,
        loadMatches: loadMatchesHandler,
        hasError,
        isLoading,
        refresh: loadMatchesHandler,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
