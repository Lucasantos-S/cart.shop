import Skeleton from '@/components/ui/skeleton'

export default function CatalogProductsSkeleton() {
  return Array.from({ length: 5 }).map((_, index) => {
    return (
      <div
        key={index}
        className="border-input-foreground flex min-h-28 w-full cursor-pointer items-center space-x-4 rounded-md border p-4"
      >
        <div className="flex w-20 rounded-lg">
          <Skeleton className=" h-20 w-full rounded-lg" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-14" />
        </div>
      </div>
    )
  })
}
