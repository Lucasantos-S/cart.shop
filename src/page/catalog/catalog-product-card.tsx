import { Link } from 'react-router-dom'

import { GetProductsResponse } from '@/api/get-products'
import Skeleton from '@/components/ui/skeleton'
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
      className="border-input-foreground group flex  max-h-28 min-h-28 w-full animate-left cursor-pointer items-center gap-6 space-x-4 rounded-md border p-4 hover:bg-accent lg:mt-0 lg:min-h-52 lg:items-center lg:justify-center lg:border-none lg:hover:bg-transparent"
    >
      <div className=" w-20 rounded-lg transition-all lg:w-40  lg:group-hover:scale-110 ">
        {productsData.img ? (
          <img
            className="h-full w-full object-cover"
            src={productsData?.img}
            alt={productsData.name}
          />
        ) : (
          <Skeleton className=" h-20 w-full rounded-lg" />
        )}
      </div>
      <div className="flex flex-col transition-all lg:group-hover:scale-110">
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
