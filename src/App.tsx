import RefreshIcon from './assets/icons/refresh.svg'
import ErrorIcon from './assets/icons/alert-triangle.svg'
import BaseIcon from './components/Icons/BaseIcon/BaseIcon'
import CommandLogotype from './assets/icons/command-logo.svg'
import BaseContainer, {
  ContainerSizes,
} from './components/Containers/BaseContainer/BaseContainer'
import BaseNotifyContainer from './components/NotifyContainers/BaseNotifyContainer/BaseNotifyContainer'
import CommandListElement from './components/ListElement/CommandListElement/CommandListElement'
import { useEffect, useMemo } from 'react'
import { useMatches } from './hooks/useMatches'
import BaseButton from './components/Buttons/BaseButton/BaseButton'

function App() {
  const { matches, loadMatches, refresh, hasError, isLoading } = useMatches()

  useEffect(() => {
    loadMatches()
  }, [])

  const dataMemoization = useMemo(() => {
    return (
      (matches && matches.map((match, index) => ({ ...match, id: index }))) ||
      []
    )
  }, [matches])

  // Добавил мемоизацию таким образом, чтобы map каждый раз не прогонял этот список если ничего не менялось
  const memoizationMatchesList = useMemo(() => {
    return dataMemoization.map((match) => (
      <CommandListElement
        logotype={<BaseIcon source={CommandLogotype} />}
        statusMatch={match.status}
        awayTeam={match.awayTeam}
        homeTeam={match.homeTeam}
        homeScore={match.homeScore}
        awayScore={match.awayScore}
        key={match.id}
      />
    ))
  }, [dataMemoization])

  return (
    <section className="section-matches">
      <BaseContainer size={ContainerSizes.EXTRA_LARGE}>
        <div className="section-matches__header">
          <h1 className="section-matches__title">Match tracker</h1>

          <div className="section-matches__actions">
            {hasError && (
              <BaseNotifyContainer
                options={{
                  content: 'Ошибка: не удалось загрузить информацию',
                  icon: <BaseIcon source={ErrorIcon} />,
                }}
              />
            )}
            <BaseButton
              onClick={refresh}
              disabled={isLoading}
              icons={[
                {
                  source: <BaseIcon source={RefreshIcon} />,
                  position: 'right',
                },
              ]}
              isLoading={isLoading}
              loaderIcon={
                <BaseIcon source={RefreshIcon} className="animation-spin" />
              }
            >
              Обновить
            </BaseButton>
          </div>
        </div>
        <div className="matches-list">
          {!isLoading && memoizationMatchesList}

          {isLoading && (
            <p className="matches-list__loading-data">Загрузка данных...</p>
          )}
        </div>
      </BaseContainer>
    </section>
  )
}

export default App
