import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import Routers from './router'

function App() {
  return (
    <div className="min-h-screen">
      <HelmetProvider>
        <Helmet titleTemplate="%s | cart.shop" />
        <Routers />
      </HelmetProvider>
    </div>
  )
}

export default App
