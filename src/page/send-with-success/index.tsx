import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import SuccessAnimate from '@/Lottie/success'

export default function SendWithSuccess() {
  const navigate = useNavigate()
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [navigate])
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <SuccessAnimate />
      <p className="text-xl text-green-700">Pedido enviado com sucesso!</p>
    </div>
  )
}
