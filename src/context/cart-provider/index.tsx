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
  const [cart, setCart] = useState({} as CartState)

  function updateItemQuantityInCart(cartItemId: string, newQuantity: number) {
    setCart((cart) => {
      const updatedCartItems = cart.cartItems.map((item) => {
        if (item.id === cartItemId) {
          const newTotal = newQuantity * item.product.price
          return {
            ...item,
            quantity: newQuantity,
            total: newTotal,
          }
        }
        return item
      })

      const { totalItems, totalPrice } =
        calculateTotalItemsAndPrice(updatedCartItems)

      return {
        ...cart,
        cartItems: updatedCartItems,
        totalItems,
        totalPrice,
      }
    })
  }

  function removeItemQuantityFromCart(cartItemId: string, newQuantity: number) {
    updateItemQuantityInCart(cartItemId, newQuantity)
  }

  function addToItemCart(cartItem: cartItem) {
    if (!cart.cartItems) {
      createdCart(cartItem)
      return
    }
    updateCart(cartItem)
  }

  function updateCart(cartItem: cartItem) {
    setCart((cart) => {
      return {
        ...cart,
        cartItems: [...cart.cartItems, cartItem],
        totalPrice: cart.totalPrice + cartItem.total,
        totalItems: cart.totalItems + cartItem.quantity,
      }
    })
  }

  function createdCart(cartItem: cartItem) {
    setCart({
      id: uuidv4(),
      totalItems: cartItem.quantity,
      totalPrice: cartItem.total,
      cartItems: [cartItem],
    })
  }

  function removedCartItem(cartItemId: string) {
    if (cart.cartItems.length <= 1) {
      setCart({} as CartState)
      return
    }
    const newCart = cart.cartItems.filter((item) => item.id !== cartItemId)

    const { totalItems, totalPrice } = calculateTotalItemsAndPrice(newCart)

    setCart((cart) => {
      return {
        ...cart,
        cartItems: [...newCart],
        totalPrice,
        totalItems,
      }
    })
  }

  function calculateTotalItemsAndPrice(newCart: cartItem[]) {
    const { totalItems, totalPrice } = newCart.reduce(
      (acc, item) => {
        acc.totalPrice += item.quantity * item.product.price
        acc.totalItems += item.quantity
        return acc
      },
      { totalItems: 0, totalPrice: 0 },
    )

    return {
      totalItems,
      totalPrice,
    }
  }

  return (
    <CardContext.Provider
      value={{
        cart,
        addToItemCart,
        removedCartItem,
        removeItemQuantityFromCart,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

function useCart() {
  const context = React.useContext(CardContext)

  if (!context) {
    throw new Error('useCart must be used within a useCartProvider')
  }

  return context
}

export { CartProvider, useCart }
