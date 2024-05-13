import React, { useCallback, useReducer } from 'react'

import { cartReducer, initialState } from '@/reducers/cart-reducer'
import {
  addNewItemToCartActions,
  createNewCartActions,
  removeCartActions,
  removeItemFromCartActions,
  updateItemQuantityInCartActions,
} from '@/reducers/cart-reducer/actions'

import { cartItem, ContextProps, ICardContext } from './cart-provider.structure'

const CardContext = React.createContext({} as ICardContext)

function CartProvider({ children }: ContextProps) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState)

  const removeItemQuantityFromCart = useCallback(
    (cartItemId: string, newQuantity: number) => {
      if (newQuantity >= 1)
        dispatch(updateItemQuantityInCartActions({ cartItemId, newQuantity }))
    },
    [dispatch],
  )

  const addQuantityFromCart = useCallback(
    (cartItemId: string, newQuantity: number) => {
      dispatch(updateItemQuantityInCartActions({ cartItemId, newQuantity }))
    },
    [dispatch],
  )

  const addToItemCart = useCallback(
    (cartItem: cartItem) => {
      if (!cartState.cartItems) {
        dispatch(createNewCartActions(cartItem))
        return
      }
      dispatch(addNewItemToCartActions(cartItem))
    },
    [cartState.cartItems, dispatch],
  )

  function removedCart() {
    dispatch(removeCartActions())
  }

  const removedCartItem = useCallback(
    (cartItemId: string) => {
      if (cartState.cartItems.length <= 1) {
        removedCart()
        return
      }
      dispatch(removeItemFromCartActions(cartItemId))
    },
    [cartState.cartItems.length, dispatch],
  )

  return (
    <CardContext.Provider
      value={{
        cart: cartState,
        addToItemCart,
        addQuantityFromCart,
        removeItemQuantityFromCart,
        removedCart,
        removedCartItem,
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
