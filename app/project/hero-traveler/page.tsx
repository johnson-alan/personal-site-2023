import Image from 'next/image'
import Badge from '../../Badge'

import HomepagePic from '../../../public/homelister/hl-homepage.png'
import HomesForSalePic from '../../../public/homelister/hl-homes-for-sale.png'
export default function HeroTraveler() {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={HomepagePic}
        alt="A screenshot of the homepage of the HomeLister website"
      />
      <p className="text-1xl text-left">
        HomeLister is a real estate technology platform that enables homesellers to list their homes on the Multiple Listing Service (MLS) and other real estate websites without paying a traditional listing commission to brokers. It provides a suite of tools to help homesellers manage their listings, market their home, and communicate directly with buyers and buyer agents, from scheduling their first open houses all the way through the closing process. By eliminating the seller agent&apos;s listing commission in favor of low flat fees, HomeLister saves homesellers an average of 30% of their equity at time of sale.
      </p>
      <h1 className="text-3xl font-bold text-left">Selected Work</h1>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex flex-row gap-2 items-baseline">
              <h2 className="text-2xl font-bold text-left">
                Homes For Sale
              </h2>
              <h5 className="text-sm text-left">
                2023
              </h5>
            </div>
            <p>Map-based search view for HomeLister listings</p>
            <Badge>Sole Developer</Badge>
          </div>
          <Image
            src={HomesForSalePic}
            alt="A screenshot of the map-based Homes for Sale page of the HomeLister website"
            className='border'
          />
        </div>
      </div>
    </div>
  )
}
