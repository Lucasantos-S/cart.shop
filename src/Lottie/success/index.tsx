import { useLottie } from 'lottie-react'

import sucess from './sucess.json'

const style = {
  height: 400,
}

export default function SuccessAnimate() {
  const options = {
    animationData: sucess,
    loop: false,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
