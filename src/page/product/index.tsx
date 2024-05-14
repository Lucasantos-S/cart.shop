import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'

import { getProductById } from '@/api/get-product-by-id'
import RequestError from '@/components/request-error'
import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Skeleton from '@/components/ui/skeleton'
import { Textarea } from '@/components/ui/textarea'
import { useCart } from '@/context/cart-provider'
import { formatPrice } from '@/lib/utils'

import ProductSkeleton from './product-skeleton'

const productSchema = z.object({
  observation: z.string(),
})

export type ProductSchema = z.infer<typeof productSchema>

export default function Product() {
  const navigate = useNavigate()

  const { addToItemCart } = useCart()

  const { productId } = useParams()

  const {
    data: productFn,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId as string),
  })

  const [quantity, setQuantity] = useState(1)
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(productSchema),
    values: {
      observation: '',
    },
  })

  const onSubmit = (data: ProductSchema) => {
    if (productFn) {
      toast.success('Item adicionado no carrinho')
      addToItemCart({
        ...data,
        id: uuidv4(),
        quantity,
        total: (productFn?.price as number) * quantity,
        product: productFn,
      })
      navigate('/cart')
    }
  }

  if (isLoadingProduct) return <ProductSkeleton />
  if (isErrorProduct) return <RequestError />
  return (
    <>
      <Helmet title={productFn?.name} />
      <div className="flex w-screen flex-col  space-y-4 lg:container  ">
        <Title title={productFn?.name as string} />
        <main className=" flex animate-left flex-col items-center space-y-2 overflow-auto px-8">
          {productFn?.img ? (
            <img
              className=" mt-10 h-40 object-cover"
              src={productFn?.img}
              alt={productFn?.name}
            />
          ) : (
            <Skeleton className="mt-10 h-40 w-96 " />
          )}
          <div className="flex w-full flex-col space-y-2">
            <p className="max-w-80 break-words text-lg text-muted-foreground">
              {productFn?.description}
            </p>
            <span className="text-lg font-bold -tracking-tight text-foreground">
              {formatPrice(productFn?.price as number)}
            </span>
          </div>
        </main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex  w-full flex-1 flex-col space-y-5 p-4 px-8 sm:p-8"
        >
          <section className="flex flex-col space-y-2">
            <Label htmlFor="observation" className="text-base">
              Observação:
            </Label>
            <Textarea
              {...register('observation')}
              className="h-28 resize-none"
              id="observation"
            />
          </section>
          <section className="flex items-center gap-10">
            <div className="flex items-center gap-1">
              <Button
                type="button"
                disabled={quantity === 1}
                onClick={() => {
                  setQuantity((quantity) => quantity - 1)
                }}
                variant={'outline'}
                className="flex h-8 w-8 items-center justify-center p-0"
              >
                <Minus />
                <span className="sr-only">diminuir 1 item do pedido</span>
              </Button>
              <input
                disabled
                value={quantity}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-input text-center"
              />
              <Button
                type="button"
                onClick={() => {
                  setQuantity((quantity) => quantity + 1)
                }}
                variant={'outline'}
                className="flex h-8 w-8 items-center justify-center p-0"
              >
                <Plus />
                <span className="sr-only">Aumentar 1 item do pedido</span>
              </Button>
            </div>
            <Button className="flex-1">ADICIONAR</Button>
          </section>
        </form>
      </div>
    </>
  )
}
