import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'

import CatalogProductCard from './catalog-product-card'

export default function Catalog() {
  return (
    <>
      <Helmet title="Catalogo" />
      <div className="flex w-screen flex-col  space-y-4  ">
        <header className="animate-left w-full  ">
          <h1 className=" text-center text-3xl font-bold tracking-tight">
            Catalogo
          </h1>
        </header>
        <main className="animate-left flex flex-1 flex-col space-y-2 overflow-auto px-8">
          {Array.from({ length: 10 }, (_, index) => (
            <CatalogProductCard key={index} />
          ))}
        </main>
        <footer className="flex h-16 w-full  justify-center bg-green-600 hover:bg-green-600/80">
          <Button
            variant={'ghost'}
            className="flex h-full w-full items-center justify-between px-10 hover:bg-green-600/30"
          >
            <span className="text-lg text-muted">5 Produtos.</span>
            <span className="text-lg text-muted">Carrinho</span>
            <span className="text-lg text-muted">R$ 500,00</span>
          </Button>
        </footer>
      </div>
    </>
  )
}
