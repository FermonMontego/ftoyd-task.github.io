import { FC } from 'react'
import CommandStatistic from './components/CommandStatistic/CommandStatistic'
import CommandMember from './components/CommandMember/CommandMember'

import './style.scss'

type Props = {
  commandData: any
}

const CommandComposition: FC<Props> = ({ commandData }) => {
  return (
    <div className="command-composition-wrapper">
      <div className="command-composition-wrapper__command">
        {commandData?.players &&
          commandData.players.map((player: any) => (
            <CommandMember member={player} key={`${player.username}`} />
          ))}
      </div>
      <div className="command-composition-wrapper__command-stat">
        <CommandStatistic commandData={commandData} />
      </div>
    </div>
  )
}

export default CommandComposition
