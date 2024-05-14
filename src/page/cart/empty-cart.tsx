import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import EmptyCartAnimation from '@/Lottie/empty-cart-animation/index.tsx'

export default function EmptyCart() {
  const navigate = useNavigate()
  return (
    <>
      <Helmet title="Carrinho" />
      <div className="flex h-full w-screen items-center justify-center">
        <div className="mt-28 flex flex-col items-center">
          <p className="max-w-[400px] animate-left text-center  text-3xl tracking-tight text-foreground">
            O carrinho de compras está vazio no momento.
          </p>
          <EmptyCartAnimation />
          <div className="flex animate-left flex-col space-y-6">
            <Button onClick={() => navigate('/')}>RETORNAR AO CATALOGO</Button>
          </div>
        </div>
      </div>
    </>
  )
}
