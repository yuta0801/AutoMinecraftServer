import React from 'react'
import styled from 'styled-components'
import { ButtonPrimary, ButtonDanger } from '../../atoms/Form'
import { TextInput } from '../../atoms/Form/TextInput/style'

interface TableProps {
  children: React.ReactNode
  header: string[]
}

export const Table = (props: TableProps) => (
  <table className="table table-hover table-condensed manage_table">
    <thead>
      <tr>{ props.header.map(label => <th>{label}</th>) }</tr>
    </thead>
    <tbody>{props.children}</tbody>
  </table>
)

interface RowProps {
  title: React.ReactNode,
  onDelete?(): void
  onRestore?(): void
}

export const Row = ({ title, onDelete, onRestore }: RowProps) => (
  <tr>
    <th>{title}</th>
    { onRestore && <th><ButtonPrimary onClick={onRestore}>復元</ButtonPrimary></th> }
    { onDelete && <th><ButtonDanger onClick={onDelete}>削除</ButtonDanger></th> }
  </tr>
)

export const PropertiesContainer = styled.div`
  ${TextInput} {
    height: 22px;
    width: 120px;
    padding: 1px 5px;
  }
`
