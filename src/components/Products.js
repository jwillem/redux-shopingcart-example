import Product from './Product'

const Products = ({
  products,
  onCartAdd
}) => {
  return (
    <div>
      <h2>Products</h2>
      {products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onCartAdd={(amount) => onCartAdd(product, amount)}
          />
        )
      })}
    </div>
  )
}

Products.propTypes = {
  products: React.PropTypes.array.isRequired,
  onCartAdd: React.PropTypes.func.isRequired
}

export default Products
