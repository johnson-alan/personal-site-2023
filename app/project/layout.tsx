"use client"

import { useEffect, useState } from "react"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const baseHeaderStyles = "flex flex-col gap-4 lg:gap-10 fade opacity-100"
  const [headerStyles, setHeaderStyles] = useState(baseHeaderStyles)

  const baseContentContainerStyles = "content flex flex-col gap-4 lg:gap-10 fade overflow-auto opacity-0"
  const [contentContainerStyles, setContentContainerStyles] = useState(baseContentContainerStyles)

  useEffect(() => {
    setHeaderStyles(baseHeaderStyles.replace('opacity-100', 'opacity-0'))
    setTimeout(() => {
      setHeaderStyles(prevStyle => `${prevStyle} h-0`)
    }, 0)
    setTimeout(() => {
      setContentContainerStyles(baseContentContainerStyles.replace('opacity-0', 'opacity-100'))
    }, 750)
  }, [])

  return (
    <div className="h-full">
      <div className={headerStyles}>
        <div>
          <h1 className="text-4xl font-bold text-left">
            Allen Johnson is a Brooklyn-based Software Engineer
          </h1>
        </div>

        <div className="z-10 w-full items-center justify-start font-mono text-sm lg:flex">
          <div className="flex w-full items-end flg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex gap-2 lg:pointer-events-auto"
              href="mailto:allendotjohnson@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className={contentContainerStyles}>
        <div className="h-1" />
        {children}
        <div className="h-1"/>
      </div>
    </div>
  )
}
