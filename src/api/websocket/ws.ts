import { BASE_URL_WSS } from '../constants/uri'

export const onSocketCreate = () => {
  const socket = new WebSocket(BASE_URL_WSS)
  return socket
}
