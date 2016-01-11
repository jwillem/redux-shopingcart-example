import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import cart from './modules/cart'
import products from './modules/products'

export default combineReducers({
  counter,
  cart,
  products,
  router
})
