import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
  for (const inputId in state.inputs) {
    if (!state.inputs[inputId]) continue
  }
  return {
    inputs: { ...state.inputs, [action.inputId]: action.value }
  }
}

export const useForm = (initialInputs) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs
  })

  const inputHandler = useCallback((id, value) => {
    dispatch({
      inputId: id,
      value: value,
    })
  }, [])

  return [formState, inputHandler]
}
