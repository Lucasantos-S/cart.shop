import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-6xl tracking-tight text-muted-foreground">404</h1>
      <p className="text-muted-foreground">Pagina não encontrada</p>
      <Button
        onClick={() => {
          navigate('/', { replace: true })
        }}
      >
        Voltar ao catalogo
      </Button>
    </div>
  )
}
