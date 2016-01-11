const findIndexOfIdInState = (state, payload) => {
  return state.reduce((prevItem, item, index) => {
    if (item.id === payload.id) {
      return index
    }
    return prevItem
  }, -1)
}

export default findIndexOfIdInState
