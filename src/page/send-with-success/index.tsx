import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { useCart } from '@/context/cart-provider'
import SuccessAnimate from '@/Lottie/success'

export default function SendWithSuccess() {
  const navigate = useNavigate()

  const { setCartSend } = useCart()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCartSend(false)
      navigate('/', { replace: true })
    }, 3000)

    return () => clearTimeout(timeout)
  }, [navigate, setCartSend])
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Helmet title="Sucesso" />/
      <SuccessAnimate />
      <p className="text-xl text-green-700">Pedido enviado com sucesso!</p>
    </div>
  )
}
