import { useLottie } from 'lottie-react'

import error from './error.json'

export default function Error() {
  const options = {
    animationData: error,
    loop: false,
    autoplay: true,
  }

  const { View } = useLottie(options, {
    height: '30%',
  })

  return View
}
