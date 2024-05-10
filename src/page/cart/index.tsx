import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import OrderProductCard from './order-product-card'

export default function Cart() {
  const navigate = useNavigate()
  const order = {
    id: '1',
    observation: '',
    quantity: 1,
    total: 12.99,
    product: {
      id: '58d6048f-53b9-4cf1-94ca-ff1e5a2e1697',
      name: 'Big Mac',
      price: 12.99,
      description:
        'Dois hambúrgueres, alface, queijo, molho especial, cebola e picles em um pão com gergelim.',
      img: 'https://private-user-images.githubusercontent.com/84051326/329671311-695bca44-1f85-42e0-950e-8a0c5c832836.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTUzNjI0MDcsIm5iZiI6MTcxNTM2MjEwNywicGF0aCI6Ii84NDA1MTMyNi8zMjk2NzEzMTEtNjk1YmNhNDQtMWY4NS00MmUwLTk1MGUtOGEwYzVjODMyODM2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MTAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTEwVDE3MjgyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZiOGQ4NTAyZWZjNGRlNmUzOGM5OTE0MmNhMDU0OWE4M2NkZDhkNTAwYmU2NjRmZmY1ZWRhYjBiNWYyOGVjNjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.gkmQvmrF0CmBabNJtdmqKIOMWft-YqIz230KeiWs_LQ',
    },
  }
  return (
    <>
      <Helmet title="Carrinho" />
      <div className="flex w-screen flex-col  space-y-4 px-8 pb-4">
        <section className="flex flex-1 flex-col space-y-2 overflow-auto ">
          <OrderProductCard orderProductData={order} />
        </section>
        <section className="flex  w-full flex-col  justify-center space-y-4 ">
          <div className="flex items-center justify-between border-b pb-2">
            <p className=" text-lg font-bold tracking-tight">Total</p>
            <p className="text-lg font-bold tracking-tight">R$100,00</p>
          </div>
          <Button
            type="button"
            onClick={() => {
              navigate('/success')
            }}
          >
            Fazer pedido
          </Button>
        </section>
      </div>
    </>
  )
}
