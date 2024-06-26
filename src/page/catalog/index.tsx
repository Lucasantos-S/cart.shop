import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'

import { getProducts } from '@/api/get-products'
import RequestError from '@/components/request-error'
import Title from '@/components/title'

import CartDetails from './cart-details'
import CatalogProductCard from './catalog-product-card'
import CatalogProductsSkeleton from './catalog-products-skeleton'

export default function Catalog() {
  const {
    data: productsFn,
    isLoading: isLoadingProducts,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  const products = useMemo(() => {
    return productsFn?.map((product) => {
      return <CatalogProductCard key={product.id} productsData={product} />
    })
  }, [productsFn])

  if (isError) return <RequestError />
  return (
    <>
      <Helmet title="Catálogo" />
      <div className="flex w-full  flex-col  space-y-4 lg:items-center lg:justify-center  ">
        <Title title="Catálogo" />
        <main className="flex w-screen flex-1 grid-cols-2 flex-col  space-y-2 overflow-auto px-8 lg:container lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-0 lg:space-y-0 ">
          {isLoadingProducts ? <CatalogProductsSkeleton /> : products}
        </main>
        <CartDetails />
      </div>
    </>
  )
}
