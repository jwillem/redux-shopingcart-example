import findIndexOfIdInState from '../utils/findIndexOfIdInState'

// Action Creators
const add = (item, amount = 1) => {
  const {id, title, price} = item
  return {
    type: 'CART_ADD',
    payload: {
      id,
      title,
      price,
      quantity: amount
    }
  }
}

const remove = (itemId) => {
  return {
    type: 'CART_REMOVE',
    payload: itemId
  }
}

const checkout = () => {
  return {
    type: 'CART_CHECKOUT'
  }
}

export const actions = {
  add,
  remove,
  checkout
}

// Reducers
const addItem = (state, {payload}) => {
  // find/indexOf does not work
  const maybeIndex = findIndexOfIdInState(state, payload)
  if (maybeIndex !== -1) {
    const newState = [...state]
    newState[maybeIndex].quantity += payload.quantity
    return newState
  } else {
    return [
      ...state,
      payload
    ]
  }
}

const removeItemById = (state, {payload}) => {
  return state.filter(item => item.id !== payload)
}

const checkoutItems = (state, {payload}) => {
  return []
}

export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'CART_ADD':
      return addItem(state, action)
    case 'CART_REMOVE':
      return removeItemById(state, action)
    case 'CART_CHECKOUT':
      return checkoutItems(state, action)
    default:
      return state
  }
}

export default reducer
