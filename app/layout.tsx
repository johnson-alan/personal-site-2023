'use client'

import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
import './globals.css'
import { useEffect, useRef, useState } from 'react'
import ProjectNavItem from './ProjectNavItem'
import projects from './projects'

const inter = Inter({ subsets: ['latin'] })

const NAV_ITEM_MARGIN = 10
const NAV_ITEM_HEIGHT = 40 + NAV_ITEM_MARGIN
const NAV_ITEM_HEIGHT_DESKTOP = 60 + NAV_ITEM_MARGIN
const NAV_ITEM_DETAILS_HEIGHT = 60

const getNavItemHeight = () => {
  const navItemHeight = window.innerWidth < 1024 ? NAV_ITEM_HEIGHT : NAV_ITEM_HEIGHT_DESKTOP
  return navItemHeight
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [firstLoadPathname] = useState(pathname)
  const selectedProject = pathname.split('/')[2] || ''

  const ref = useRef<HTMLHeadingElement>(null)

  const mainStyles = "relative flex flex-col justify-between content-start p-4 md:p-24"

  const navStylesBase = pathname === '/'
    ? 'nav z-10 flex flex-col absolute left-4 bottom-4 md:left-24 md:bottom-24 transition-transform duration-1000'
    : 'nav z-10 flex flex-col absolute left-4 bottom-4 md:left-24 md:bottom-24'
  const [navStyles, setNavStyles] = useState(navStylesBase)

  const overlayStylesBase = 'z-40 absolute top-0 left-0 right-0 bottom-0 bg-backgroundColor opacity-100 fade'
  const [overlayStyles, setOverlayStyles] = useState(overlayStylesBase)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => {
      setOverlayStyles(overlayStylesBase.replace('opacity-100', 'opacity-0'))
      setNavStyles(`${navStylesBase} transition-transform duration-1000`)
      setTimeout(() => {
        // remove the ref
        if (overlayRef.current) {
          overlayRef.current.remove()
        }
      }, 100)
    }, 500)
  }, [])

  useEffect(() => {
    if (pathname === '/') {
      setNavStyles(navStylesBase)

      if (ref.current) {
        // remove the transform style from the ref
        ref.current.style.transform = ''
      }

      return
    }


    const projectIndex = projects.findIndex(project => project.path === selectedProject)
    const navItemHeight = getNavItemHeight()
    const heightOffset = projects.length * navItemHeight - projectIndex * navItemHeight - NAV_ITEM_MARGIN + NAV_ITEM_DETAILS_HEIGHT

    if (ref.current) {
      console.log({ heightOffset })
      ref.current.style.transform = `translateY(calc(-100vh + 12rem + ${heightOffset}px))`
    }

  }, [pathname, selectedProject, navStylesBase])

  return (
    <html lang="en">
      <body className={inter.className}>
      <main className={mainStyles}>
        {firstLoadPathname.includes('project') && <div className={overlayStyles} ref={overlayRef} />}
        <nav className={navStyles} ref={ref}>
          {projects.map((project) => (
            <ProjectNavItem
              key={project.name}
              project={project}
            />
          ))}
        </nav>
        {children}
      </main>
      </body>
    </html>
  )
}
