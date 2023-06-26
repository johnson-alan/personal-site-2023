import Image from 'next/image'
import Badge from '../../Badge'

import HomepagePic from '../../../public/advance-auto-parts/aap-homepage.png'
import HomesForSalePic from '../../../public/homelister/hl-homes-for-sale.png'
export default function AdvanceAutoParts() {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={HomepagePic}
        alt="A screenshot of the homepage of the HomeLister website"
        width={800}
        priority
      />
      <p className="text-1xl text-left">
        Advance Auto Parts commissioned Welcome Agency to build a product selection iPad app for their Store of the Future pilot. The app was designed to be used by customers and store associates to find the right part for their particular vehicle. The app was built using React Native and was deployed to iPads in stores across the country via Microsoft Azure Mobile Device Management.
      </p>
      <h1 className="text-3xl font-bold text-left">Demo</h1>
      <video
        src="/advance-auto-parts/aap-selection.mp4#t=0.001"
        muted
        controls
        className='border'
      />
    </div>
  )
}
