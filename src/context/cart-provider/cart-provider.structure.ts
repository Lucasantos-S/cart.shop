import { GetProductsResponse } from '@/api/get-products'

export interface ContextProps {
  children: React.ReactNode
}

export interface cartItem {
  id: string
  observation: string
  quantity: number
  total: number
  product: GetProductsResponse
}

export interface CartState {
  id: string
  cartItems: cartItem[]
  totalItems: number
  totalPrice: number
}

export interface UpdateQuantityFromCart {
  cartItemId: string
  newQuantity: number
}

export interface ICardContext {
  cart: CartState
  cartSend: boolean
  addToItemCart: (cardItem: cartItem) => void
  addQuantityFromCart: (cartItemId: string, newQuantity: number) => void
  removeItemQuantityFromCart: (cartItemId: string, newQuantity: number) => void
  removedCart: () => void
  removedCartItem: (cartItemId: string) => void
  setCartSend: React.Dispatch<React.SetStateAction<boolean>>
}
