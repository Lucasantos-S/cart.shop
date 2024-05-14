/* eslint-disable no-case-declarations */
import { v4 as uuidv4 } from 'uuid'

import { cartItem } from '@/context/cart-provider/cart-provider.structure'

import { ActionTypes } from './actions'

export interface CartState {
  id: string
  cartItems: cartItem[]
  totalItems: number
  totalPrice: number
}

export const initialState: CartState = {
  id: '',
  totalItems: 0,
  totalPrice: 0,
  cartItems: [],
}

export function calculateTotalItemsAndPrice(newCart: cartItem[]) {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_CART:
      const { newCart } = action.payload
      return {
        ...state,
        id: uuidv4(),
        totalItems: newCart.quantity,
        totalPrice: newCart.total,
        cartItems: [newCart],
      }
    case ActionTypes.ADD_NEW_ITEM_TO_CART:
      const { newItemCart } = action.payload
      return {
        ...state,
        cartItems: [...state.cartItems, newItemCart],
        totalPrice: state.totalPrice + newItemCart.total,
        totalItems: state.totalItems + newItemCart.quantity,
      }
    case ActionTypes.REMOVE_CART:
      return {
        ...state,
        id: '',
        totalItems: 0,
        totalPrice: 0,
        cartItems: [],
      }
    case ActionTypes.REMOVE_ITEM_FROM_CART:
      const { cartItemId } = action.payload
      const updateItems = state.cartItems.filter(
        (item) => item.id !== cartItemId,
      )
      const { totalItems, totalPrice } =
        calculateTotalItemsAndPrice(updateItems)
      return {
        ...state,
        totalItems,
        totalPrice,
        cartItems: [...updateItems],
      }
    case ActionTypes.UPDATE_ITEM_QUANTITY_IN_CART:
      const { cartItemId: itemId, newQuantity } = action.payload

      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === itemId) {
          const newTotal = newQuantity * item.product.price
          return {
            ...item,
            quantity: newQuantity,
            total: newTotal,
          }
        }
        return item
      })
      const { totalItems: updatedTotal, totalPrice: updatedPrice } =
        calculateTotalItemsAndPrice(updatedCartItems)

      return {
        ...state,
        cartItems: updatedCartItems,
        totalItems: updatedTotal,
        totalPrice: updatedPrice,
      }

    default:
      return state
  }
}
