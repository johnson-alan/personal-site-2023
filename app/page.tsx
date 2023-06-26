'use client'

import { useEffect, useState } from "react"

export default function Home() {
  const baseStyles = "name fixed flex flex-col gap-4 lg:gap-10 fade opacity-0"
  const [styles, setStyles] = useState(baseStyles)

  // fade in the name on page load
  useEffect(() => {
    setTimeout(() => {
      setStyles(baseStyles.replace('opacity-0', 'opacity-100'))
    }, 200)
  }, [])

  return (
    <div className={styles}>
      <div>
        <h1 className="text-4xl font-bold text-left">
          Alan Johnson is a Brooklyn-based Software Engineer
        </h1>
      </div>

      <div className="z-10 w-full items-center justify-start font-mono text-sm lg:flex">
        <div className="flex w-full items-end flg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex gap-2 pointer-events-auto"
            href="mailto:contact@alanjohn.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
