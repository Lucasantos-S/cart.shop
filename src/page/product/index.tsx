import { Minus, Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import Title from '@/components/title'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import img from '../../assets/jordan1.png'

export default function Product() {
  return (
    <>
      <Helmet title="Produto" />
      <div className="flex w-screen flex-col  space-y-4  ">
        <Title title="Produto" />
        <main className="animate-left flex flex-col items-center space-y-2 overflow-auto px-8">
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
        <form className="flex w-full flex-col gap-10 p-8">
          <section className="flex flex-col space-y-2">
            <Label htmlFor="observation" className="text-base">
              Observação:
            </Label>
            <Textarea
              className="col-span-3 h-36 resize-none"
              id="observation"
            />
          </section>
          <section className="flex items-center gap-10">
            <div className="flex items-center gap-1">
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-muted-foreground hover:bg-muted">
                <Minus />
              </div>
              <input
                disabled
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-muted-foreground text-center"
                value={1}
              />
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-muted-foreground hover:bg-muted">
                {' '}
                <Plus />
              </div>
            </div>
            <Button type="button" className="flex-1">
              Adicionar
            </Button>
          </section>
        </form>
      </div>
    </>
  )
}
