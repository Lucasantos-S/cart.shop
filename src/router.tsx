import { BrowserRouter, Route, Routes as AllRoutes } from 'react-router-dom'

import LeyoutDefault from './page/_layouts/leyout-default'
import Cart from './page/cart'
import Catalog from './page/catalog'
import NotFound from './page/not-found'
import Product from './page/product'
import SendWithSuccess from './page/send-with-success'

export default function Routers() {
  return (
    <BrowserRouter>
      <AllRoutes>
        <Route path="/" errorElement={<NotFound />} element={<LeyoutDefault />}>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Product />} />
        </Route>
        <Route path="success" element={<SendWithSuccess />} />
        <Route path="*" element={<NotFound />} />
      </AllRoutes>
    </BrowserRouter>
  )
}
