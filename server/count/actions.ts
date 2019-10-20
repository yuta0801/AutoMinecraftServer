import { createActions } from 'redux-actions'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export default createActions({
  increment: (by: number = 1) => ({ by }),
  decrement: (by: number = 1) => ({ by }),
})
