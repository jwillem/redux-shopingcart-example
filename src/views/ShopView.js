import { connect } from 'react-redux'
import { actions } from 'redux/modules/cart'
import Products from 'components/Products'
import Cart from 'components/Cart'

export class ShopView extends React.Component {
  static propTypes = {
    products: React.PropTypes.array.isRequired,
    cart: React.PropTypes.array.isRequired,
    add: React.PropTypes.func.isRequired,
    remove: React.PropTypes.func.isRequired,
    checkout: React.PropTypes.func.isRequired
  }

  render () {
    const {products, cart, add, remove, checkout} = this.props
    return (
      <div className='container'>
        <Products
          products={products}
          onCartAdd={(product, amount) => add(product, amount)}
        />
        <Cart
          cart={cart}
          onRemove={(itemId) => remove(itemId)}
          onCheckout={() => checkout()}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart
})

export default connect(mapStateToProps, actions)(ShopView)
