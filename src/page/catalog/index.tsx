import { Helmet } from 'react-helmet-async'

import CatalogProductCard from './catalog-product-card'

export default function Catalog() {
  return (
    <>
      <Helmet title="Catalogo" />
      <div className="flex w-screen flex-col  space-y-4">
        <header className="w-full  ">
          <h1 className=" text-center text-3xl font-bold tracking-tight">
            Catalogo
          </h1>
        </header>
        <main className="flex flex-1 flex-col space-y-2 overflow-y-auto">
          {Array.from({ length: 6 }, (_, index) => (
            <CatalogProductCard key={index} />
          ))}
        </main>
      </div>
    </>
  )
}
