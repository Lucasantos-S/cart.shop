import { zodResolver } from '@hookform/resolvers/zod'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import img from '../../assets/jordan1.png'

const productSchema = z.object({
  observation: z.string().nullable(),
})

export type ProductSchema = z.infer<typeof productSchema>

export default function Product() {
  const navigate = useNavigate()

  const [quantity, setQuantity] = useState(1)
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(productSchema),
    values: {
      observation: '',
    },
  })

  const onSubmit = (data: ProductSchema) => {
    console.log(data)
    navigate('/cart')
  }
  return (
    <>
      <Helmet title="Produto" />
      <div className="flex w-screen flex-col  space-y-4  ">
        <Title title="Produto" />
        <main className="flex animate-left flex-col items-center space-y-2 overflow-auto px-8">
          <img className=" h-50 w-80 object-cover" src={img} alt="" />
          <div className="flex w-full flex-col space-y-2">
            <p className="text-lg font-bold -tracking-tight text-foreground">
              Tenis de nasquete
            </p>
            <span className="text-lg font-bold -tracking-tight text-muted-foreground">
              R$ 500,00
            </span>
          </div>
        </main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-10 p-8"
        >
          <section className="flex flex-col space-y-2">
            <Label htmlFor="observation" className="text-base">
              Observação:
            </Label>
            <Textarea
              {...register('observation')}
              className="col-span-3 h-36 resize-none"
              id="observation"
            />
          </section>
          <section className="flex items-center gap-10">
            <div className="flex items-center gap-1">
              <Button
                type="button"
                disabled={quantity === 1}
                onClick={() => {
                  setQuantity((quantity) => quantity - 1)
                }}
                variant={'outline'}
                className="flex h-8 w-8 items-center justify-center p-0"
              >
                <Minus />
              </Button>
              <input
                disabled
                value={quantity}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-input text-center"
              />
              <Button
                type="button"
                onClick={() => {
                  setQuantity((quantity) => quantity + 1)
                }}
                variant={'outline'}
                className="flex h-8 w-8 items-center justify-center p-0"
              >
                <Plus />
              </Button>
            </div>
            <Button className="flex-1">Adicionar</Button>
          </section>
        </form>
      </div>
    </>
  )
}
