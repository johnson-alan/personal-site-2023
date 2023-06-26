import Image from 'next/image'

import SelectedWorkInformation from '../SelectedProjectInformation'

import HomepagePic from '../../../public/buildstream/bs-homepage.png'
import LiveMapPic from '../../../public/buildstream/bs-live-map.png'
import DashboardPic from '../../../public/buildstream/bs-dashboard.png'
import AnalyticsPic from '../../../public/buildstream/bs-analytics.png'

export default function BuildStream() {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={HomepagePic}
        alt="A screenshot of the homepage of the HomeLister website"
        priority
      />
      <p className="text-1xl text-left">
        BuildStream is a UK-focused construction site worker recruitment platform. Prior to a major pivot, it began as an IoT platform that helped construction companies manage their heavy equipment fleets using proprietary sensor technology attached to onsite equipment that could monitor the equipment&apos;s location, usage, and maintenance needs, displaying site data in real time on a web-based console that also provided analytics and reporting tools.
      </p>
      <h1 className="text-3xl font-bold text-left">Selected Work</h1>
      <div className="flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Live Heavy Equipment Status Map"
            description="Map-based view displaying the location and status of heavy equipment across multiple active construction sites"
            timePeriod='2019'
            soleDeveloper
          />
          <Image
            src={LiveMapPic}
            alt="A screenshot of the Live Map view of the Buildstream website"
            className='border'
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Analytics Dashboard"
            description="Configurable, responsive dashboard widgets displaying key metrics and analytics"
            timePeriod='2019'
            soleDeveloper
          />
          <Image
            src={DashboardPic}
            alt="A screenshot of the Analytics Dashboard view of the Buildstream website"
            className='border'
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Graphs and Charts"
            description="D3.js-based SVG graphs and charts displaying key metrics and analytics"
            timePeriod='2019'
            soleDeveloper
          />
          <Image
            src={AnalyticsPic}
            alt="A screenshot of the additional graphs in the Analytics Dashboard view of the Buildstream website"
            className='border'
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}
