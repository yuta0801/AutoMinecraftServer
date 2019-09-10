import styled from 'styled-components'

export const Slider = styled.input.attrs({
  type: 'range'
})`
  -webkit-appearance: none;
  background-color: #555;
  border: 0;
  height: 2px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #666;
    text-align: center;
    width: 15px;
    height: 15px;
    border: 1px solid #FFF;
    border-radius: 15px;
    cursor: pointer;
    box-sizing: border-box;
  }

  &::-webkit-slider-thumb:hover {
    background-color: #777;
  }

  &:focus {
    outline: none;
  }
`
