import { BrowserRouter, Route, Routes as AllRoutes } from 'react-router-dom'

import SendWithSuccess from '@/page/_layouts/leyout-default'

import LeyoutDefault from './page/_layouts/leyout-default'
import Cart from './page/cart'
import Catalog from './page/catalog'
import Product from './page/product'

export default function Routers() {
  return (
    <BrowserRouter>
      <AllRoutes>
        <Route path="/" element={<LeyoutDefault />}>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Product" element={<Product />} />
        </Route>
        <Route path="/success" element={<SendWithSuccess />} />
      </AllRoutes>
    </BrowserRouter>
  )
}
