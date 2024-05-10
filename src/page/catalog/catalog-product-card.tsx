import { Link } from 'react-router-dom'

import img from '../../assets/jordan1.png'

export default function CatalogProductCard() {
  return (
    <Link
      to={'/product'}
      className="border-input-foreground flex h-28 w-full cursor-pointer items-center space-x-4 rounded-md border p-4"
    >
      <div className="h-16 rounded-lg">
        <img className="h-full w-full object-cover" src={img} alt="" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-base font-bold tracking-tight">Air Jordan</h2>
        <p className="text-muted-foreground">R$500,00</p>
      </div>
    </Link>
  )
}
