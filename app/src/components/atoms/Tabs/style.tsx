import styled, { css } from 'styled-components'

export const TabList = styled.ul`
  margin-top: 0;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1px;
`

export const TabWrap = styled.li`
  position: relative;
  margin-bottom: -1px;
  display: inline-block;
`

export const Tab = styled.a<{ active: boolean }>`
  position: relative;
  display: block;
  padding: 2px 8px 4px;
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;

  ${props => props.active && css`
    color: #555;
    cursor: default;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
  `}
`
