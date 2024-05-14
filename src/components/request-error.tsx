import Error from '@/Lottie/error/index.tsx'

export default function RequestError() {
  return (
    <div className="container flex min-h-full w-screen flex-col pt-10">
      <Error />
      <div className="mt-20 flex flex-1 animate-pulse items-center justify-center">
        <p className="text-center text-2xl text-destructive">
          <span className="text-2xl font-bold text-muted-foreground">Ops!</span>{' '}
          Parece que ocorreu um erro. Estamos trabalhando para resolver isso o
          mais rápido possível.
        </p>
      </div>
    </div>
  )
}
