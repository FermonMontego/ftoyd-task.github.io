import { BASE_URL } from './constants/uri'

const fetcher = async (
  METHOD: 'GET' | 'POST',
  ROUTE: string,
  BODY?: any,
  HEADERS?: Headers
) => {
  return await fetch(BASE_URL + ROUTE, {
    method: METHOD,
    body: BODY,
    headers: HEADERS,
  })
}

export { fetcher }
