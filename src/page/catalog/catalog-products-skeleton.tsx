import Skeleton from '@/components/ui/skeleton'

export default function CatalogProductsSkeleton() {
  return Array.from({ length: 6 }).map((_, index) => {
    return (
      <div
        key={index}
        className="border-input-foreground flex min-h-28 w-full cursor-pointer items-center space-x-4 rounded-md border p-4 lg:mt-0 lg:min-h-52  lg:items-center lg:justify-center lg:border-none lg:hover:bg-transparent"
      >
        <div className="flex w-20 rounded-lg lg:w-40">
          <Skeleton className=" h-20 w-full rounded-lg lg:h-40" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-14" />
        </div>
      </div>
    )
  })
}
