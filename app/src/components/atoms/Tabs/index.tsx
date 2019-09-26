import React, { useContext } from 'react'
import { TabList, TabWrap, Tab } from './style'

const TabContext = React.createContext({
  current: 0,
  onChange: (_: number) => {}
})

interface TabsProps {
  children: React.ReactNode
  current: number
  onChange(index: number): void
}

export const Tabs = ({ children, ...values }: TabsProps) => (
  <TabList>
    <TabContext.Provider value={values}>
      { children }
    </TabContext.Provider>
  </TabList>
)

interface NavTabProps {
  index: number
  label: string
}

export const NavTab = (props: NavTabProps) => {
  const { current, onChange } = useContext(TabContext)

  return (
    <TabWrap>
      <Tab
        active={current == props.index}
        onClick={() => onChange(props.index)}
      >
        { props.label }
      </Tab>
    </TabWrap>
  )
}
