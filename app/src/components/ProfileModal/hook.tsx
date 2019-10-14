import { useState } from 'react'
import { PROFILE_DEFAULT } from '../../constants'

export const useProfileDraft = () => {
  type TextState = { min_memory_text: string, max_memory_text: string }
  type SliderState = { min_memory_slider: string, max_memory_slider: string }
  type State = typeof PROFILE_DEFAULT & TextState & SliderState
  const [state, setState] = useState(PROFILE_DEFAULT)
  const update = <K extends keyof State>
    (key: K, value: State[K]) => setState({ ...state, [key]: value })

  const actions = {
    MIN_MEMORY_SLIDER_CHANGE: (value: number) =>
      state.min_memory <= value && update('min_memory', value),
    MAX_MEMORY_SLIDER_CHANGE: (value: number) =>
      state.max_memory >= value && update('max_memory', value),
  }

  return [state, actions]
}
