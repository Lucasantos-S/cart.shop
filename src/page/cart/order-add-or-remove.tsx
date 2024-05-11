import { Minus, Plus, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface OrderAddOrRemoveProps {
  idCartItem: string
  quantity: number
}

export default function OrderAddOrRemove({ quantity }: OrderAddOrRemoveProps) {
  return (
    <section className="flex flex-col items-center gap-2">
      <Button variant={'outline'}>
        Remover
        <Trash2 className="ml-2 h-4 w-4" />
        <span className="sr-only">remover item do pedido</span>
      </Button>
      <div className="flex items-center gap-1">
        <Button
          type="button"
          variant={'outline'}
          className="flex h-8 w-8 items-center justify-center p-0"
        >
          <Minus />
          <span className="sr-only">diminuir 1 item do pedido</span>
        </Button>
        <input
          disabled
          value={quantity}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-input text-center"
        />
        <Button
          type="button"
          variant={'outline'}
          className="flex h-8 w-8 items-center justify-center p-0"
        >
          <Plus />
          <span className="sr-only">Aumentar 1 item do pedido</span>
        </Button>
      </div>
    </section>
  )
}
