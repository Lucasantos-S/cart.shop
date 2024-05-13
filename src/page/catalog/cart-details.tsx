import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-provider'
import { formatPrice } from '@/lib/utils'

export default function CartDetails() {
  const { cart } = useCart()
  return (
    <Link
      to={'/cart'}
      className="flex h-16 w-full  justify-center bg-primary transition-all hover:bg-primary/90"
    >
      <Button
        variant={'ghost'}
        className="flex h-full w-full items-center justify-between px-10 hover:bg-green-600/30"
      >
        <span className="text-lg text-foreground">
          {cart.totalItems ?? '0'} Produto(s)
        </span>
        <span className="text-lg text-foreground">Carrinho</span>
        <span className="text-lg text-foreground">
          {formatPrice(cart.totalPrice ?? 0)}{' '}
        </span>
      </Button>
    </Link>
  )
}