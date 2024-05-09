import { BrowserRouter, Route, Routes as AllRoutes } from 'react-router-dom'

import Cart from './page/cart'
import Catalog from './page/catalog'
import Product from './page/product'
import SendWithSuccess from './page/send-with-success'

export default function Routers() {
  return (
    <BrowserRouter>
      <AllRoutes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/success" element={<SendWithSuccess />} />
      </AllRoutes>
    </BrowserRouter>
  )
}
