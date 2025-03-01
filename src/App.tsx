import BaseButton from './components/Buttons/BaseButton/BaseButton'
import RefreshIcon from './assets/icons/refresh.svg'
import ErrorIcon from './assets/icons/alert-triangle.svg'
import BaseIcon from './components/Icons/BaseIcon/BaseIcon'
import CommandLogotype from './assets/icons/command-logo.svg'
import BaseContainer, {
  ContainerSizes,
} from './components/Containers/BaseContainer/BaseContainer'
import BaseNotifyContainer from './components/NotifyContainers/BaseNotifyContainer/BaseNotifyContainer'
import CommandListElement from './components/ListElement/CommandListElement/CommandListElement'
import { useCallback, useEffect, useState } from 'react'
import { fetcher } from './api/fetcher'

function App() {
  const [data, setData] = useState<any[]>()
  const [isLoadingData, setIsLoadindData] = useState<boolean>(false)
  const [loadingHasBeenError, setLoadingHasBeenError] = useState(false)

  const loadData = useCallback(async () => {
    setIsLoadindData(true)
    return (await fetcher('GET', '/fronttemp'))
      .json()
      .then((res) => {
        setIsLoadindData(false)
        setLoadingHasBeenError(false)

        return res
      })
      .finally(() => setIsLoadindData(false))
  }, [])

  useEffect(() => {
    loadData()
      .then((res) => setData(res.data.matches))
      .catch(() => setLoadingHasBeenError(true))
  }, [])

  const refreshMatchesHandler = useCallback(() => {
    loadData()
      .then((res) => {
        setData(res.data.matches)
      })
      .catch(() => setLoadingHasBeenError(true))
  }, [])

  return (
    <section className="section-matches">
      <BaseContainer size={ContainerSizes.EXTRA_LARGE}>
        <div className="section-matches__header">
          <h1 className="section-matches__title">Match tracker</h1>

          <div className="section-matches__actions">
            {loadingHasBeenError && (
              <BaseNotifyContainer
                options={{
                  content: 'Ошибка: не удалось загрузить информацию',
                  icon: <BaseIcon source={ErrorIcon} />,
                }}
              />
            )}
            <BaseButton
              onClick={refreshMatchesHandler}
              disabled={isLoadingData}
              icons={[
                {
                  source: <BaseIcon source={RefreshIcon} />,
                  position: 'right',
                },
              ]}
              isLoading={isLoadingData}
              loaderIcon={
                <BaseIcon source={RefreshIcon} className="animation-spin" />
              }
            >
              Обновить
            </BaseButton>
          </div>
        </div>

        <div className="matches-list">
          {!isLoadingData &&
            data &&
            data.map((match) => {
              console.log(match, 'match')
              return (
                <CommandListElement
                  logotype={<BaseIcon source={CommandLogotype} />}
                  statusMatch={match.status}
                  nameCommand="Team Spirit"
                  key={Date.now() * (Math.random() * 1000) + match.awayScore}
                  homeScore={match.homeScore}
                  awayScore={match.awayScore}
                />
              )
            })}

          {isLoadingData && (
            <p className="matches-list__loading-data">Загрузка данных...</p>
          )}
        </div>
      </BaseContainer>
    </section>
  )
}

export default App
