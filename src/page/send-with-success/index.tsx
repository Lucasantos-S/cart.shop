import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from '@/context/cart-provider'
import SuccessAnimate from '@/Lottie/success'

export default function SendWithSuccess() {
  const navigate = useNavigate()

  const { removedCart } = useCart()

  useEffect(() => {
    const timeout = setTimeout(() => {
      removedCart()
      navigate('/')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [navigate, removedCart])
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <SuccessAnimate />
      <p className="text-xl text-green-700">Pedido enviado com sucesso!</p>
    </div>
  )
}
