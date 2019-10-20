import { createActions } from 'redux-actions'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const actionCreators = createActions({
  increment: (by: number = 1) => ({ by }),
  decrement: (by: number = 1) => ({ by }),
})

export default actionCreators
