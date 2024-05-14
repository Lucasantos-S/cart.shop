import { Link } from 'react-router-dom'

import { useCart } from '@/context/cart-provider'
import { formatPrice } from '@/lib/utils'

export default function CartDetails() {
  const { cart } = useCart()
  return (
    <Link
      to={'/cart'}
      className="grid h-16 w-full grid-cols-3 items-center  justify-between bg-primary px-8 transition-all hover:bg-primary/90"
    >
      <span className="text-foreground sm:text-lg">
        {cart.totalItems ?? '0'} PRODUTO(S)
      </span>
      <span className="text-center text-foreground sm:text-lg ">CARRINHO</span>
      <div className="flex justify-end">
        <span className="text-foreground sm:text-lg">
          {formatPrice(cart.totalPrice ?? 0)}{' '}
        </span>
      </div>
    </Link>
  )
}
