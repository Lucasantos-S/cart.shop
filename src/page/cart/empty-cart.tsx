import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import EmptyCartAnimation from '@/Lottie/empty-cart-animation/index.tsx'

export default function EmptyCart() {
  const navigate = useNavigate()
  return (
    <div className="flex h-full w-screen  animate-left items-center justify-center ">
      <div className="mt-28 flex flex-col items-center">
        <h1 className="max-w-[400px] text-center text-3xl font-bold tracking-tight text-foreground">
          O carrinho de compras está vazio no momento.
        </h1>
        <EmptyCartAnimation />
        <div className="flex flex-col space-y-6">
          <Button onClick={() => navigate('/')}>Retornar ao catalogo</Button>
        </div>
      </div>
    </div>
  )
}
