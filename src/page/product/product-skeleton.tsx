import Skeleton from '@/components/ui/skeleton'

export default function ProductSkeleton() {
  return (
    <div className="flex w-screen flex-col  space-y-4  ">
      <header className="flex items-center justify-center">
        <Skeleton className="h-10 w-32" />
      </header>
      <main className=" flex animate-left flex-col items-center space-y-2 overflow-auto px-8">
        <Skeleton className="mt-10 h-40 w-[80%] " />
        <div className="flex w-full flex-col space-y-2">
          <Skeleton className="h-20 w-80 " />
          <Skeleton className="nd h-6 w-20" />
        </div>
      </main>
      <footer className="flex h-[350px] w-full flex-1 flex-col gap-10 p-8">
        <section className="flex flex-col space-y-2">
          <Skeleton className="h-6 w-28 " />
          <Skeleton className="w-fill h-36 " />
        </section>
        <section className="flex items-center gap-10">
          <div className="flex items-center gap-1">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
          </div>
          <Skeleton className="h-10 w-full" />
        </section>
      </footer>
    </div>
  )
}
