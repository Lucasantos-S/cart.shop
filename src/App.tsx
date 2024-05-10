import './globals.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { queryClient } from './lib/react-query'
import Routers from './router'

function App() {
  return (
    <div className="min-h-screen">
      <HelmetProvider>
        <Helmet titleTemplate="%s | cart.shop" />
        <QueryClientProvider client={queryClient}>
          <Routers />
        </QueryClientProvider>
      </HelmetProvider>
    </div>
  )
}

export default App
