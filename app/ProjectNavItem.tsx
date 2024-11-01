
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FunctionComponent, useRef, useEffect } from 'react'
import { Project } from './projects'

interface NavItemProps {
  project: Project
}

const ProjectNavItem: FunctionComponent<NavItemProps> = ({ project }) => {
  const { name, path, startYear, endYear, role } = project

  const navItemRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)

  const pathname = usePathname() ?? ''
  const pathPart = pathname?.split('/')[2] || ''

  const href = pathname === '/' ? `/project/${path}` : '/'

  const navItemStyles = "w-full text-4xl font-bold text-left lg:text-6xl hover:text-blue-700 mt-[10px] fade bg-backgroundColor"

  const onProjectPage = pathname !== '/'
  const highligted = onProjectPage && pathPart === path
  const hidden = onProjectPage && pathname !== `/project/${path}`

  const formattedDates = startYear === endYear ? startYear : `${startYear} - ${endYear}`

  useEffect(() => {
    if (highligted) {
      setTimeout(() => {
        const subtitle = subtitleRef.current
        if (subtitle) {
          subtitle.classList.add('h-[60px]')
          subtitle.classList.remove('opacity-0')
          subtitle.classList.add('opacity-100')
        }
      }, 0)
    }

    if (!highligted) {
      const subtitle = subtitleRef.current
      if (subtitle) {
        subtitle.classList.add('h-0')
        subtitle.classList.remove('opacity-100')
        subtitle.classList.add('opacity-0')
      }
    }

  }, [highligted])

  return (
    <div className={`${!hidden ? 'active-item' : ''} relative opacity-100 fade`} ref={navItemRef}>
      <Link href={hidden ? pathname : href}>
        <h2
          className={`${navItemStyles} ${hidden ? 'opacity-0 cursor-default' : 'opacity-100'}`}
        >
          {name}
        </h2>
        {highligted && (
          <div className='relative fade-in-all opacity-0 h-0' ref={subtitleRef}>
            <h3 className='text-2xl lg:text-3xl font-bold bg-backgroundColor'>
              {formattedDates}
            </h3>
            <h3 className='text-1xl bg-backgroundColor'>
              {role}
            </h3>
            <div className='h-8 w-full absolute -bottom-8 bg-gradient-to-b from-backgroundColor via-backgroundColor to-tranparent' />
          </div>
        )}
      </Link>
    </div>
  )
}

export default ProjectNavItem
