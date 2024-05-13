import { useLottie } from 'lottie-react'

import enptyList from './empty-list.json'

export default function EmptyCartAnimation() {
  const options = {
    animationData: enptyList,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, {
    height: 400,
  })

  return View
}
