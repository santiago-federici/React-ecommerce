export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  DECREMENT_QUANTITY_FROM_CART: 'DECREMENT_QUANTITY_FROM_CART'
}

const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const indexOfProduct = state.findIndex(item => item.id == id)

      if (indexOfProduct >= 0) {
        const newState = structuredClone(state)
        newState[indexOfProduct].quantity += 1
        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      const newState = state.filter(item => item.id != id)
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([])
      return []
    }

    case CART_ACTION_TYPES.DECREMENT_QUANTITY_FROM_CART: {
      const { id } = actionPayload
      const indexOfProduct = state.findIndex(item => item.id == id)

      if (indexOfProduct >= 0) {
        const newState = structuredClone(state)
        if (newState[indexOfProduct].quantity > 1) {
          newState[indexOfProduct].quantity -= 1
          updateLocalStorage(newState)
          return newState
        }

        if (newState[indexOfProduct].quantity == 1) {
          const newState = state.filter(item => item.id != id)
          updateLocalStorage(newState)
          return newState
        }
      }
    }
  }
}
