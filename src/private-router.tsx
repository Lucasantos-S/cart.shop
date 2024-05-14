import { Navigate } from 'react-router-dom'

import { useCart } from './context/cart-provider'

type PrivateRouter = {
  children: JSX.Element
}

export default function PrivateRouter({ children }: PrivateRouter) {
  const { cartSend } = useCart()

  return cartSend ? children : <Navigate to={'/'} />
}
