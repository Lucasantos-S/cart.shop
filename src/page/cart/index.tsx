import { useMutation } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { submitOrdersFromCart } from '@/api/submit-orders-from-cart'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-provider'
import { formatPrice } from '@/lib/utils'

import EmptyCart from './empty-cart'
import OrderProductCard from './order-product-card'

export default function Cart() {
  const navigate = useNavigate()
  const { cart, removedCart } = useCart()

  const { mutateAsync: submitOrder, isPending: isLoadingSubmit } = useMutation({
    mutationFn: submitOrdersFromCart,
    onSuccess: () => {
      removedCart()
      navigate('/success')
    },
    onError: () => {
      toast.error('Erro no envio do pedido, verifique e tente novamente...')
    },
  })

  const allItemsInCart = useMemo(() => {
    if (cart.cartItems)
      return cart.cartItems.map((item) => {
        return <OrderProductCard key={item.id} orderProductData={item} />
      })
  }, [cart])

  if (cart.cartItems.length <= 0) return <EmptyCart />
  return (
    <>
      <Helmet title="Carrinho" />
      <div className="flex w-screen flex-col  space-y-4 px-8 pb-4">
        <section className="flex flex-1 flex-col space-y-2 overflow-auto ">
          {allItemsInCart}
        </section>
        <section className="flex  w-full flex-col  justify-center space-y-4 ">
          <div className="flex items-center justify-between border-b pb-2">
            <p className=" text-lg font-bold tracking-tight">
              Total: {cart.totalItems}
            </p>
            <p className="text-lg font-bold tracking-tight">
              {formatPrice(cart.totalPrice ?? 0)}
            </p>
          </div>
          <Button
            disabled={isLoadingSubmit}
            type="button"
            onClick={() => {
              submitOrder(cart)
            }}
          >
            {isLoadingSubmit ? (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              'Fazer pedido'
            )}
          </Button>
        </section>
      </div>
    </>
  )
}
