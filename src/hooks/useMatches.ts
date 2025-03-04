import { useContext } from 'react'
import Context from '../context/matches/Context'

export const useMatches = () => {
  return useContext(Context)
}
