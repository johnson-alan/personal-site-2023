import Image from 'next/image'
import Badge from '../../Badge'

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
      />
      <p className="text-1xl text-left">
        BuildStream is a UK-focused construction site worker recruitment platform. Prior to a major pivot, it began as an IoT platform that helped construction companies manage their heavy equipment fleets using proprietary sensor technology attached to onsite equipment that could monitor the equipment&apos;s location, usage, and maintenance needs, displaying site data in real time on a web-based console that also provided analytics and reporting tools.
      </p>
      <h1 className="text-3xl font-bold text-left">Selected Work</h1>
      <div className="flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex flex-row gap-2 items-baseline">
              <h2 className="text-2xl font-bold text-left">
                Live Heavy Equipment Status Map
              </h2>
            </div>
            <p>Map-based view displaying the location and status of heavy equipment across multiple active construction sites</p>
            <Badge>Sole Developer</Badge>
          </div>
          <Image
            src={LiveMapPic}
            alt="A screenshot of the Live Map view of the Buildstream website"
            className='border'
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex flex-row gap-2 items-baseline">
              <h2 className="text-2xl font-bold text-left">
                Analytics Dashboard
              </h2>
            </div>
            <p>Configurable, responsive dashboard widgets displaying key metrics and analytics</p>
            <Badge>Sole Developer</Badge>
          </div>
          <Image
            src={DashboardPic}
            alt="A screenshot of the Analytics Dashboard view of the Buildstream website"
            className='border'
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex flex-row gap-2 items-baseline">
              <h2 className="text-2xl font-bold text-left">
                Graphs and Charts
              </h2>
            </div>
            <p>D3.js-based SVG graphs and charts displaying key metrics and analytics</p>
            <Badge>Sole Developer</Badge>
          </div>
          <Image
            src={AnalyticsPic}
            alt="A screenshot of the additional graphs in the Analytics Dashboard view of the Buildstream website"
            className='border'
          />
        </div>
      </div>
    </div>
  )
}
