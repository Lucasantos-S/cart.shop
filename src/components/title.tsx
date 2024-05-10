import React from 'react'

export interface TitleProps {
  title: string
}

export default function Title({ title }: TitleProps) {
  return (
    <header className="animate-left w-full  ">
      <h1 className=" text-center text-3xl font-bold tracking-tight">
        {title}
      </h1>
    </header>
  )
}