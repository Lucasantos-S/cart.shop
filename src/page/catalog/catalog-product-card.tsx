import { Link } from 'react-router-dom'

import { GetProductsResponse } from '@/api/get-products'
import { formatPrice } from '@/lib/utils'

interface CatalogProductCardProps {
  productsData: GetProductsResponse
}

export default function CatalogProductCard({
  productsData,
}: CatalogProductCardProps) {
  return (
    <Link
      to={`/product/${productsData.id}`}
      className="border-input-foreground flex max-h-28 min-h-28 w-full animate-left cursor-pointer items-center space-x-4 rounded-md border p-4"
    >
      <div className=" w-20 rounded-lg">
        <img
          className="h-full w-full object-cover"
          src={productsData?.img}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-base font-bold tracking-tight">
          {productsData?.name}
        </h2>
        <p className="text-muted-foreground">
          {formatPrice(productsData?.price as number)}
        </p>
      </div>
    </Link>
  )
}
