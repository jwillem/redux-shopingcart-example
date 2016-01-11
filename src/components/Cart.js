import CartItem from './CartItem'

const Cart = ({
  cart,
  onRemove,
  onCheckout
}) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            onRemove={() => onRemove(item.id)}
          />
        )
      })}
      <hr/>
      <input
        type='button'
        value='checkout'
        onClick={() => onCheckout()}
      />
    </div>
  )
}

Cart.propTypes = {
  cart: React.PropTypes.array.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  onCheckout: React.PropTypes.func.isRequired
}

export default Cart
