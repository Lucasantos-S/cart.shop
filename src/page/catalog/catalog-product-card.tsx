import { Link } from 'react-router-dom'

export default function CatalogProductCard() {
  return (
    <Link
      to={'/product'}
      className="flex h-20 w-full cursor-pointer items-center space-x-4 rounded-md border border-card-foreground p-4"
    >
      <div className="h-14 w-14 rounded-lg border " />
      <div className="flex flex-col">
        <h2 className="text-base font-bold tracking-tight">Produto</h2>
        <p className="text-muted-foreground">R$500,00</p>
      </div>
    </Link>
  )
}
