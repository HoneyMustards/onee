export const countActionTypes = {
  ADD: 'ADD',
}

export const addCount = (count) => dispatch => {
  return dispatch({ type: countActionTypes.ADD, count })
}