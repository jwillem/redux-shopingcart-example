import products, {actions} from 'redux/modules/products'

describe('(Redux) Products', () => {
  describe('ActionCreators', () => {
    describe('update', () => {
      it('should return a correct action', () => {
        const product = {
          id: 12,
          title: 'Premium Trousers',
          amountAvailable: 5,
          price: 100
        }
        const expectedAction = {
          type: 'PRODUCT_UPDATE',
          payload: {
            id: 12,
            amountBought: 3
          }
        }
        expect(
          actions.update(product, 3)
        ).to.be.deep.equal(expectedAction)
      })
    })
  })

  describe('Reducer', () => {
    describe('update', () => {
      it('should update a product amount', () => {
        const product = {
          id: '#45',
          title: 'Red Socks',
          amountAvailable: 10,
          price: 5
        }
        const stateBefore = [{
          id: '#42',
          title: 'Yellow Socks',
          amountAvailable: 11,
          price: 5
        },
        product
      ]
        const action = actions.update(product, 3)
        const stateAfter = [{
          id: '#42',
          title: 'Yellow Socks',
          amountAvailable: 11,
          price: 5
        },{
          id: '#45',
          title: 'Red Socks',
          amountAvailable: 7,
          price: 5
        }]
        expect(
          products(stateBefore, action)
        ).to.be.deep.equal(stateAfter)
      })

      it('should not result in a negative amount', () => {
        const product = {
          id: '#45',
          title: 'Red Socks',
          amountAvailable: 2,
          price: 5
        }
        const stateBefore = [product]
        const action = actions.update(product, 3)
        const stateAfter = [{
          id: '#45',
          title: 'Red Socks',
          amountAvailable: 0,
          price: 5
        }]
        expect(
          products(stateBefore, action)
        ).to.be.deep.equal(stateAfter)
      })
    })
  })
})
