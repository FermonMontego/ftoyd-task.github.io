import ReactSelect, {
  components,
  GroupBase,
  OptionsOrGroups,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select'

import IconDropdownSelect from '../assets/icons/arrow-down-select.svg'
import BaseIcon from '../../Icons/BaseIcon/BaseIcon'
import { FC, memo, useMemo } from 'react'

type Props = {
  value?: any
  onChange?: (value: any) => void
  options: OptionsOrGroups<unknown, GroupBase<unknown>>
}

const Select: FC<Props> = ({ value, onChange, options }) => {
  const themeStylesSelect: StylesConfig = useMemo(() => {
    return {
      container: (base, props) => ({
        ...base,
        maxWidth: '100%',
        width: '100%',
        background: '#0B0E12',
        borderRadius: 4,
      }),
      control: (base, props) => ({
        ...base,
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        background: '#0B0E12',
        color: '#B4B5B6',
        fontSize: 16,
        fontWeight: 500,
        padding: 12,
        ':focus': {
          boxShadow: '0px 0px 0px 6px rgba(11, 14, 18, .75)',
        },
      }),
      option: (base) => ({
        ...base,
        ':hover': {
          background: '#101318',
        },
        background: '#0B0E12',
        fontSize: 16,
      }),
      menu(base, props) {
        return {
          ...base,
          color: '#fff',
          background: '#0B0E12',
          fontSize: 12,
        }
      },
    }
  }, [])

  const baseComponents: Partial<
    SelectComponentsConfig<unknown, boolean, GroupBase<unknown>>
  > = useMemo(() => {
    return {
      ...components,
      DropdownIndicator: (props) => {
        return (
          <BaseIcon
            source={IconDropdownSelect}
            styles={{
              transform: props.isFocused ? 'rotate(180deg)' : '',
            }}
          />
        )
      },
      IndicatorSeparator: null,
    }
  }, [])

  return (
    <ReactSelect
      options={options}
      onChange={onChange}
      value={value}
      placeholder={'Все статусы'}
      styles={themeStylesSelect}
      components={baseComponents}
    />
  )
}

export default memo(Select)
