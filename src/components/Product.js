const Product = (props) => {
  const {
    product,
    onCartAdd
  } = props
  let quantityInput
  return (
    <div>
      <strong>{product.title}</strong> - ${product.price} <small>x {product.amountAvailable}</small>
      {' '}
      <input
        style={{width: 30}}
        type='text'
        defaultValue='1'
        ref={node => quantityInput = node}
      />
      <input
        type='button'
        value='add to cart'
        onClick={() => {
          onCartAdd(parseInt(quantityInput.value, 10))
          quantityInput.value = 1
        }}
      />
    </div>
  )
}

Product.propTypes = {
  product: React.PropTypes.object.isRequired,
  onCartAdd: React.PropTypes.func.isRequired
}

export default Product
