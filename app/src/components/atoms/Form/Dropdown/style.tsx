import styled, { css } from 'styled-components'
import { Button as _Button } from '../Button'

export const Wrap = styled.div`
  position: relative;
  display: inline-block
`

export const Button = styled(_Button)<{ open: Boolean }>`
  width: 100%;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  ${props => props.open && css`
    background-color: #e6e6e6;
    border-color: #adadad;
  `}
`

export const Caret = styled.span`
  margin-left: 0;

  border-top-color: #000;

  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
`

export const Menu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .15);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, .175);
`

export const Header = styled.li`
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #777;
  white-space: nowrap;
`

export const Item = styled.a`
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;

  &:hover, &:focus {
    color: #262626;
    text-decoration: none;
    background-color: #f5f5f5;
  }
`
