import { FC } from 'react'
import CommandLogotype from '../../../CommandLogotype/CommandLogotype'

import classes from './styles.module.scss'

import AvatarIcon from '../../../../assets/icons/avatar_global.png'
import AnimationNumber from '../../../Animation/AnimationNumber/AnimationNumber'

type Props = {
  member: any
}

const CommandMember: FC<Props> = ({ member }) => {
  console.log(member, 'commandData')
  return (
    <div className={classes['command-member']}>
      <CommandLogotype logotype={AvatarIcon} nameCommand={member.username} />
      <div className={classes['command-member__label-stat']}>
        <p>Убийств</p>
        <span>
          <AnimationNumber number={member.kills} />
        </span>
      </div>
    </div>
  )
}

export default CommandMember
