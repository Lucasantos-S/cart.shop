import { cartItem } from '@/context/cart-provider/cart-provider.structure'

export enum ActionTypes {
  CREATE_NEW_CART = 'CREATE_NEW_CART',
  ADD_NEW_ITEM_TO_CART = 'ADD_NEW_ITEM_TO_CART',
  UPDATE_ITEM_QUANTITY_IN_CART = 'UPDATE_ITEM_QUANTITY_IN_CART',
  REMOVE_CART = 'REMOVE_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
}

export interface Payload {
  type: ActionTypes
  payload: {
    newCart: cartItem
    newItemCart: cartItem
    itemCartId: string
    cartItemId: string
    newQuantity: number
  }
}

export interface UpdateQuantityFromCart {
  cartItemId: string
  newQuantity: number
}

export function createNewCartActions(newCart: cartItem) {
  return {
    type: ActionTypes.CREATE_NEW_CART,
    payload: {
      newCart,
    },
  }
}

export function addNewItemToCartActions(newItemCart: cartItem) {
  return {
    type: ActionTypes.ADD_NEW_ITEM_TO_CART,
    payload: {
      newItemCart,
    },
  }
}
export function updateItemQuantityInCartActions({
  cartItemId,
  newQuantity,
}: UpdateQuantityFromCart) {
  return {
    type: ActionTypes.UPDATE_ITEM_QUANTITY_IN_CART,
    payload: {
      cartItemId,
      newQuantity,
    },
  }
}

export function removeCartActions() {
  return {
    type: ActionTypes.REMOVE_CART,
  }
}

export function removeItemFromCartActions(cartItemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      cartItemId,
    },
  }
}
