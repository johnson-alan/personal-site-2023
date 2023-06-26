'use client'

import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
import './globals.css'
import { useEffect, useRef, useState } from 'react'
import ProjectNavItem from './ProjectNavItem'
import projects from './projects'
import useWindowSize from './project/useWindowSize'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const NAV_ITEM_MARGIN = 10
const NAV_ITEM_HEIGHT = 40 + NAV_ITEM_MARGIN
const NAV_ITEM_HEIGHT_DESKTOP = 60 + NAV_ITEM_MARGIN
const NAV_ITEM_DETAILS_HEIGHT = 60

const getNavItemHeight = () => {
  const navItemHeight = window.innerWidth < 768? NAV_ITEM_HEIGHT : NAV_ITEM_HEIGHT_DESKTOP
  return navItemHeight
}

const getPaddingOffset = () => {
  if (window.innerWidth >= 1024) return 12
  if (window.innerWidth >= 768) return 6
  return 2
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { width } = useWindowSize()

  const pathname = usePathname()
  const [firstLoadPathname] = useState(pathname || '/')
  const selectedProject = pathname?.split('/')[2] || ''

  const ref = useRef<HTMLHeadingElement>(null)

  const mainStyles = "relative flex flex-col justify-between content-start p-4 md:p-24"

  const navStylesBase = pathname === '/'
    ? 'nav fixed z-10 flex flex-col left-4 bottom-4 md:left-24 md:bottom-24 transition-transform duration-1000'
    : 'nav fixed z-10 flex flex-col left-4 bottom-4 md:left-24 md:bottom-24'
  const [navStyles, setNavStyles] = useState(navStylesBase)

  const overlayStylesBase = 'z-40 absolute top-0 left-0 right-0 bottom-0 bg-backgroundColor opacity-100 fade'
  const [overlayStyles, setOverlayStyles] = useState(overlayStylesBase)
  const overlayRef = useRef<HTMLDivElement>(null)

  // for project page accessed directly via URL, start with an overlay to hide the default
  // transition of the nav items up to the top of the page
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

  // when the pathname changes from root to a project page, update the nav styles so the nav
  // element transitions to the top of the page
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
    const paddingOffset = getPaddingOffset()
    const heightOffset = (projects.length * navItemHeight) - (projectIndex * navItemHeight) - NAV_ITEM_MARGIN + NAV_ITEM_DETAILS_HEIGHT

    if (ref.current) {
      ref.current.style.transform = `translateY(calc(-100dvh + ${paddingOffset}rem + ${heightOffset}px))`
    }

  }, [pathname, selectedProject, navStylesBase, width])

  return (
    <html lang="en">
      <head>
        <title>Alan Johnson - Software Engineer</title>

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Alan Johnson is a Brooklyn-based developer building modern, React-based web applications."
        />

        <meta property="og:title" content="Alan Johnson - Software Engineer"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://alanjohn.me"/>
        <meta property="og:description" content="Alan Johnson is a Brooklyn-based developer building modern, React-based web applications."></meta>

        <meta
          name="og:image"
          content={
            // Because OG images must have a absolute URL, we use the
            // `VERCEL_URL` environment variable to get the deployment’s URL.
            `${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''}/api/static`
          }
        />

        <link rel="canonical" href="https://alanjohn.me" />
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
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
