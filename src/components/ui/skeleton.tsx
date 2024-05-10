import { HTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const span = tv({
  base: 'animate-pulse rounded bg-muted',
})
export type SkeletonType = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof span>

export type ISkeletonProps = SkeletonType

export default function Skeleton({ className, ...rest }: ISkeletonProps) {
  return <span {...rest} className={span({ className })} />
}
