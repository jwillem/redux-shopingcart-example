import cart, {actions} from 'redux/modules/cart'

describe('(Redux) Cart', () => {
  describe('ActionCreator', () => {
    describe('add', () => {
      it('should create an action to add an item', () => {
        const item = {
          id: 12,
          title: 'Seamless Socks',
          price: 33,
          amountAvailable: 2
        }
        const expectedAction = {
          type: 'CART_ADD',
          payload: {
            id: 12,
            title: 'Seamless Socks',
            price: 33,
            quantity: 1
          }
        }
        expect(
          actions.add(item)
        ).to.deep.equal(expectedAction)
      })

      it('should create an action to add an item with amount', () => {
        const item = {
          id: 12,
          title: 'Seamless Socks',
          price: 33,
          amountAvailable: 2
        }
        const amount = 2
        const expectedAction = {
          type: 'CART_ADD',
          payload: {
            id: 12,
            title: 'Seamless Socks',
            price: 33,
            quantity: 2
          }
        }
        expect(
          actions.add(item, amount)
        ).to.deep.equal(expectedAction)
      })
    })

    describe('remove', () => {
      it('should create an action to remove an item')
    })
  })

  describe('Reducer', () => {
    describe('add', () => {
      it('should add an item to cart', () => {
        const stateBefore = []
        const item = {
          id: 12,
          title: 'Knife',
          price: 43,
          amountAvailable: 43
        }
        const action = actions.add(item)
        const stateAfter = [{
          id: 12,
          title: 'Knife',
          price: 43,
          quantity: 1
        }]
        expect(
          cart(stateBefore, action)
        ).to.be.deep.equal(stateAfter)
      })

      it('should increase amount if product is in cart yet', () => {
        const stateBefore = [{
          id: 12,
          title: 'Knife',
          price: 43,
          quantity: 2
        }]
        const item = {
          id: 12,
          title: 'Knife',
          price: 43,
          amountAvailable: 43
        }
        const action = actions.add(item)
        const stateAfter = [{
          id: 12,
          title: 'Knife',
          price: 43,
          quantity: 3
        }]
        expect(
          cart(stateBefore, action)
        ).to.be.deep.equal(stateAfter)
      })
    })

    describe('remove', () => {
      it('should remove an item by Id', () => {
        const stateBefore = [{
          id: 'art-12',
          title: 'Knife',
          price: 43,
          quantity: 1
        },{
          id: 10,
          title: 'Fork',
          price: 34,
          quantity: 2
        }]
        const stateAfter = [{
          id: 10,
          title: 'Fork',
          price: 34,
          quantity: 2
        }]
        const action = actions.remove('art-12')
        expect(
          cart(stateBefore, action)
        ).to.be.deep.equal(stateAfter)
      })
    })

    describe('checkout', () => {
      it('should trigger an action to update products', () => {
        //_spies.dispatch.should.have.not.been.called

        //_spies.dispatch.should.have.been.called
      })

      it('should remove all cart items', () => {
        const stateBefore = [{
          id: 'art-12',
          title: 'Knife',
          price: 43,
          quantity: 4
        },{
          id: 10,
          title: 'Fork',
          price: 34,
          quantity: 2
        }]
        const stateAfter = []
        const action = actions.checkout()
        expect(
          cart(stateBefore, action)
        ).to.be.deep.equal(stateAfter)
      })
    })
  })
})
