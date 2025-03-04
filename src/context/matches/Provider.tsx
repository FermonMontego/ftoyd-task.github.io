import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Context, { MatchesContextType } from './Context'
import { fetcher } from '../../api/fetcher'
import { onSocketCreate } from '../../api/websocket/ws'

type Props = {} & PropsWithChildren

const Provider: FC<Props> = ({ children }) => {
  const [matches, setMatches] = useState<any[]>([])
  const [hasError, setHasError] = useState<boolean>(false)
  const [isLoading, setIsLoadind] = useState<boolean>(false)

  const socketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    socketRef.current = onSocketCreate()

    socketRef.current.onopen = (event) => {}

    socketRef.current.onclose = (event) => {}

    socketRef.current.onerror = (error) => {}

    socketRef.current.onmessage = (message) => {
      const { data } = message

      const dataParsed = JSON.parse(data)

      if (dataParsed.type === 'update_matches') {
        setMatches(dataParsed.data)
      }
    }

    return () => {
      if (socketRef.current) socketRef.current?.close()
    }
  }, [])

  const loadMatchesHandler = useCallback(async () => {
    setIsLoadind(true)
    fetcher('GET', '/fronttemp')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
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
