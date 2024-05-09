import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import Routers from './router'

function App() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <HelmetProvider>
        <Helmet titleTemplate="%s | cart.shop" />
        <Routers />
      </HelmetProvider>
    </div>
  )
}

export default App
