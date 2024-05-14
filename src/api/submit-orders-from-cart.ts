import { api } from '@/lib/axios'
import { CartState } from '@/reducers/cart-reducer'

export async function submitOrdersFromCart(cartData: CartState) {
  await api.post('send-order', { ...cartData })
}
