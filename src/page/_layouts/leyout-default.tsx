import { Outlet } from 'react-router-dom'

import Header from '@/components/header'

export default function LeyoutDefault() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex max-h-[calc(100vh-65px)] flex-1 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
