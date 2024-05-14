import { GetProductsResponse } from '@/api/get-products'
import { formatPrice } from '@/lib/utils'

import OrderAddOrRemove from './order-add-or-remove'

export interface OrderProductCardProps {
  orderProductData: {
    id: string
    observation: string
    quantity: number
    total: number
    product: GetProductsResponse
  }
}

export default function OrderProductCard({
  orderProductData,
}: OrderProductCardProps) {
  return (
    <div
      key={orderProductData.id}
      className="border-input-foreground flex max-h-28 min-h-28 w-full animate-left cursor-pointer items-center justify-between space-x-4 rounded-md border p-4"
    >
      <section className="flex items-center space-x-4">
        <div className=" w-20 rounded-lg">
          <img
            className="h-full w-full object-cover"
            src={orderProductData?.product.img}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-base font-bold tracking-tight">
            {orderProductData.product?.name}
          </h2>
          <p className="text-muted-foreground">
            {formatPrice(orderProductData?.product.price as number)}
          </p>
        </div>
      </section>
      <OrderAddOrRemove
        cartItemId={orderProductData.id}
        quantity={orderProductData.quantity}
      />
    </div>
  )
}
