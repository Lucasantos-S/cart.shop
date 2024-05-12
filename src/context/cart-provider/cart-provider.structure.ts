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

export interface ICardContext {
  addToItemCart: (cardItem: cartItem) => void
  removedCartItem: (cartItemId: string) => void
  removeItemQuantityFromCart: (cartItemId: string) => void
  cart: CartState
}
