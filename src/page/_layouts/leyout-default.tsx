import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '@/components/header'

export default function LeyoutDefault() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
