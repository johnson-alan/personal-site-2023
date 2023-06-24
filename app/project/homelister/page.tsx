import Image from 'next/image'
import Badge from '../../Badge'

import HomepagePic from '../../../public/homelister/hl-homepage.png'
import HomesForSalePic from '../../../public/homelister/hl-homes-for-sale.png'
import GPTDescriptionsPic from '../../../public/homelister/hl-gpt-descriptions.png'
import StorybookPic from '../../../public/homelister/hl-chromatic-storybook.png'
import ContractEscrowPic from '../../../public/homelister/hl-contract-escrow.png'
import ABTestPic from '../../../public/homelister/hl-ab-test.png'
import BrokerageConsolePic from '../../../public/homelister/hl-brokerage-console.png'
import LighthousePic from '../../../public/homelister/hl-lighthouse.png'
import AgreementPic from '../../../public/homelister/hl-agreement.png'
import FormBuilderPic from '../../../public/homelister/hl-form-builder.png'
import PhotosPic from '../../../public/homelister/hl-photos.png'
import CheckoutPic from '../../../public/homelister/hl-checkout.png'
import DashboardPic from '../../../public/homelister/hl-dashboard.png'
import PricingPagePic from '../../../public/homelister/hl-pricing-page.png'
import PublicListingPic from '../../../public/homelister/hl-public-listing.png'
import SelectedWorkInformation from '../SelectedProjectInformation'

export default function HomeLister() {
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
            <SelectedWorkInformation
              title="Homes For Sale"
              timePeriod="2023"
              description="Map-based search view for HomeLister listings"
              soleDeveloper
            />
            <Image
              src={HomesForSalePic}
              alt="A screenshot of the map-based Homes for Sale page of the HomeLister website"
              className='border'
            />
          </div>
          <div className="flex flex-col gap-4">
            <SelectedWorkInformation
              title="Auto-Generated Listing Descriptions"
              timePeriod="2023"
              description="ChatGPT-based listing descriptions generated via customer-selected feature salience preferences"
              soleDeveloper
            />
            <Image
              src={GPTDescriptionsPic}
              alt="A screenshot of the ChatGPT-powered Listing Flow Description page of the HomeLister website"
              className='border'
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-4">
            <SelectedWorkInformation
              title="HomeLister Design System"
              timePeriod="2022"
              description="Crossfunctional initiative between Product, Design, and Dev teams to create a smooth multiplatform pipeline (JIRA, Figma, Chromatic/Storybook) for implementing and maintaining a robust, reusable component library"
            />
            <Image
              src={StorybookPic}
              alt="A screenshot of a Storybook showing the SliderInput component on Chromatic"
              className='border'
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-4">
            <SelectedWorkInformation
              title="Transactions Management"
              timePeriod="2022"
              description="Refactored and greatly expanded a basic contract model into a comprehensive set of offer, escrow, and contact models, APIs, and utilities to serve as the foundation for full-lifecycle transaction management"
              soleDeveloper
              />
            <Image
              src={ContractEscrowPic}
              alt="A screenshot of Escrow Documents History"
              className='border'
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-4">
            <SelectedWorkInformation
              title="New User Listing Flow Product Tour"
              timePeriod="2022"
              description="Optional onboarding tour improved top-of-funnel retention by 12%"
              soleDeveloper
            />
            <video
              src="/homelister/hl-product-tour.mov#t=0.001"
              muted
              controls
              className='border'
            />
          </div>
          <div className="flex flex-col gap-4">
            <SelectedWorkInformation
              title="A/B Testing Infrastructure"
              timePeriod="2022"
              description="Support for just-in-time client and NextJS server-rendered client tests and backend server tests"
              soleDeveloper
            />
            <Image
              src={ABTestPic}
              alt="A comparison of two HomeLister Homepage variants, one labled A and the other B"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-4">
            <SelectedWorkInformation
              title="Brokerage Management Console"
              timePeriod="2021"
              description="Admin-only listing search via performant API supporting multiple concurrent filters and sort"
            />
            <Image
              src={BrokerageConsolePic}
              alt="A screenshot of the admin-only brokerage console"
              className='border'
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-4">
            <SelectedWorkInformation
              title="Performance Profiling and Optimization"
              timePeriod="2021"
              description="Lifted Lightouse performance audit scores from the mid-70s into the 90s for the HomeLister homepage. Improved Google Search Rank and increased organic inbound traffic by 30%, leading to improved conversion"
              soleDeveloper
            />
            <Image
              src={LighthousePic}
              alt="Screenshot of a Chrome Lighthouse performance audit result from June 2021 for the HomeLister homepage"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-4">
            <SelectedWorkInformation
              title="Agreement Signature Workflow Refactor"
              timePeriod="2021"
              description="Backend refactor to reduce bug surface area and cut HelloSign-based real estate agreement and amendment contract generation time by a factor of 5."
              soleDeveloper
            />
            <Image
              src={AgreementPic}
              alt="Screenshot of a Listing Flow Agreement Signature page"
              placeholder="blur"
              className='border'
            />
          </div>
          <div className="flex flex-col gap-4">
            <SelectedWorkInformation
              title="HomeLister Redesign and Relaunch"
              timePeriod="2019-2020"
              description="Ported an AngularJS monolith to a fully redesigned, responsive NextJS client"
            />
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-1xl font-bold text-left">Form Builder</h3>
                  <p>Listing Flow utility facilitating conditional, per-MLS page, section, and input rendering</p>
                </div>
                <Image
                  src={FormBuilderPic}
                  alt="Screenshot of a Listing Flow page with multiple input types generated via the Form Builder"
                  placeholder="blur"
                  className='border'
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-1xl font-bold text-left">Photo Uploader</h3>
                  <p>Drag-and-drop photo uploader with automatic photo optimization</p>
                </div>
                <Image
                  src={PhotosPic}
                  alt="Screenshot of the Listing Flow Photos page with a drag-and-drop photo uploader and grid of uploaded photos"
                  placeholder="blur"
                  className='border'
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-1xl font-bold text-left">Checkout</h3>
                  <p>Stripe-based Checkout Flow supporting simultaneous purchase of services across multiple listings</p>
                </div>
                <Image
                  src={CheckoutPic}
                  alt="Screenshot of a Listing Flow page with multiple input types generated via the Form Builder"
                  placeholder="blur"
                  className='border'
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-1xl font-bold text-left">My Listings Dashboard</h3>
                  <div>Post-listing experience for sellers to manage the sale of their home</div>
                </div>
                <Image
                  src={DashboardPic}
                  alt="Screenshot of the My Listings Dashboard"
                  placeholder="blur"
                  className='border'
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-1xl font-bold text-left">Various Landing Pages</h3>
                  <div>Responsive general-purpose landing pages and for various marketing campaigns</div>
                </div>
                <Image
                  src={PricingPagePic}
                  alt="Screenshot of the My Listings Dashboard"
                  placeholder="blur"
                  className='border'
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-1xl font-bold text-left">Public Listing Page</h3>
                  <div>Public, search-indexed listing page for sellers to share with potential buyers</div>
                </div>
                <Image
                  src={PublicListingPic}
                  alt="Screenshot of the My Listings Dashboard"
                  placeholder="blur"
                  className='border'
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
