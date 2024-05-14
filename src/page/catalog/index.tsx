import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'

import { getProducts } from '@/api/get-products'
import Title from '@/components/title'

import CartDetails from './cart-details'
import CatalogProductCard from './catalog-product-card'
import CatalogProductsSkeleton from './catalog-products-skeleton'

export default function Catalog() {
  const { data: productsFn, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  const products = useMemo(() => {
    return productsFn?.map((product) => {
      return <CatalogProductCard key={product.id} productsData={product} />
    })
  }, [productsFn])
  return (
    <>
      <Helmet title="Catálogo" />
      <div className="flex  flex-col  space-y-4  ">
        <Title title="Catálogo" />
        <main className="flex w-screen flex-1 flex-col space-y-2 overflow-auto px-8">
          {isLoadingProducts ? <CatalogProductsSkeleton /> : products}
        </main>
        <CartDetails />
      </div>
    </>
  )
}
