const CartItem = ({
  item,
  onRemove
}) => {
  const total = item.price * item.quantity
  return (
    <div>
      <strong>{item.title}</strong> - ${item.price} <small>x {item.quantity}</small> ${total}
      {' '}
      <input
        type='button'
        value='remove'
        onClick={() => onRemove()}
      />
    </div>
  )
}

CartItem.propTypes = {
  item: React.PropTypes.object.isRequired,
  onRemove: React.PropTypes.func.isRequired
}

export default CartItem
