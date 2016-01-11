import findIndexOfIdInState from '../utils/findIndexOfIdInState'

// Fixtures
const availableProducts = [{
  id: 'prod-1',
  title: 'Bird Shirt',
  amountAvailable: 5,
  price: 10
}, {
  id: 'prod-2',
  title: 'Bird Shirt Woman',
  amountAvailable: 3,
  price: 12
}, {
  id: 'prod-3',
  title: 'Red Trousers',
  amountAvailable: 7,
  price: 30
}, {
  id: 'prod-4',
  title: 'Blue Shoes',
  amountAvailable: 20,
  price: 70
}]

// ActionCreators
const update = (product, amountBought) => {
  return {
    type: 'PRODUCT_UPDATE',
    payload: {
      id: product.id,
      amountBought
    }
  }
}

export const actions = {
  update
}

// Reducers
const updateProduct = (state, {payload}) => {
  // find/indexOf does not work
  const maybeIndex = findIndexOfIdInState(state, payload)
  if (maybeIndex !== -1) {
    const newState = [...state]
    newState[maybeIndex].amountAvailable =
      Math.max(0, newState[maybeIndex].amountAvailable - payload.amountBought)
    return newState
  }
  return state
}

export const reducer = (state = availableProducts, action) => {
  switch (action.type) {
    case 'PRODUCT_UPDATE':
      return updateProduct(state, action)
    default:
      return state
  }
}

export default reducer
