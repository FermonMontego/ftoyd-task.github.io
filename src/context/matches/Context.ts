import { createContext } from 'react'

export type MatchesContextType = {
  matches: any[]
  loadMatches: () => void
  refresh: () => void
  isLoading: boolean
  hasError: boolean
}

const Context = createContext<MatchesContextType>({
  matches: [],
  loadMatches: () => null,
  refresh: () => null,
  isLoading: false,
  hasError: false,
})

export default Context
