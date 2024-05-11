import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  cartItem,
  CartState,
  ContextProps,
  ICardContext,
} from './cart-provider.structure'

const CardContext = React.createContext({} as ICardContext)

function CartProvider({ children }: ContextProps) {
  const [order, setOrder] = useState({} as CartState)

  function manageCart(cartItem: cartItem) {
    if (!order.cartItems) {
      setOrder({
        id: uuidv4(),
        totalItems: cartItem.quantity,
        totalPrice: cartItem.total,
        cartItems: [cartItem],
      })
      return
    }
    updateCart(cartItem)
  }

  function updateCart(cartItem: cartItem) {
    setOrder((cart) => {
      return {
        ...cart,
        cartItems: [...cart.cartItems, cartItem],
        totalPrice: cart.totalPrice + cartItem.total,
        totalItems: cart.totalItems + cartItem.quantity,
      }
    })
  }

  return (
    <CardContext.Provider value={{ order, manageCart }}>
      {children}
    </CardContext.Provider>
  )
}

function useCard() {
  const context = React.useContext(CardContext)

  if (!context) {
    throw new Error('useCard must be used within a UseCardProvider')
  }

  return context
}

export { CartProvider, useCard }
