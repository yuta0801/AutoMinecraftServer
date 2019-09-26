import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  padding: 2px 4px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;

  &:active {
    outline: 0;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
  }
`

export const ButtonDefault = styled(Button)`
  color: #333;
  background-color: #fff;
  border-color: #ccc;

  &:hover {
    background-color: #e6e6e6;
    border-color: #adadad;
  }

  &:active {
    background-color: #d4d4d4;
    border-color: #8c8c8c;
  }
`
