import React from 'react'

export interface TitleProps {
  title: string
}

export default function Title({ title }: TitleProps) {
  return (
    <header className="flex animate-left items-center justify-center ">
      <div className=" relative inline-block items-center justify-center">
        <div className="z-50">
          <h1 className="z-50 text-center text-4xl font-bold tracking-tight">
            {title}
          </h1>
        </div>
        <span className=" absolute -left-[4px] bottom-[4px] -z-50 h-5 w-5 rounded-sm bg-primary" />
      </div>
    </header>
  )
}
