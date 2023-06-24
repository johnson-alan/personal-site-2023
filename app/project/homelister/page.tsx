import Image from 'next/image'
import Badge from '../../Badge'

import HomepagePic from '../../../public/hl-homepage.png'
import HomesForSalePic from '../../../public/hl-homes-for-sale.png'
import GPTDescriptionsPic from '../../../public/hl-gpt-descriptions.png'
import StorybookPic from '../../../public/hl-chromatic-storybook.png'
import ContractEscrowPic from '../../../public/hl-contract-escrow.png'
// import EscrowHistoryPic from '../../../public/hl-escrow-history.png'
import ABTestPic from '../../../public/hl-ab-test.png'
import BrokerageConsolePic from '../../../public/hl-brokerage-console.png'
import LighthousePic from '../../../public/hl-lighthouse.png'
import AgreementPic from '../../../public/hl-agreement.png'
import FormBuilderPic from '../../../public/hl-form-builder.png'
import PhotosPic from '../../../public/hl-photos.png'
import CheckoutPic from '../../../public/hl-checkout.png'
import DashboardPic from '../../../public/hl-dashboard.png'
import PricingPagePic from '../../../public/hl-pricing-page.png'
import PublicListingPic from '../../../public/hl-public-listing.png'

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
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-row gap-2 items-baseline">
                <h2 className="text-2xl font-bold text-left">
                  Auto-Generated Listing Descriptions
                </h2>
                <h5 className="text-sm text-left">
                  2023
                </h5>
                </div>
              <p>ChatGPT-based listing descriptions generated via customer-selected feature salience preferences</p>
              <Badge>Sole Developer</Badge>
            </div>
            <Image
              src={GPTDescriptionsPic}
              alt="A screenshot of the ChatGPT-powered Listing Flow Description page of the HomeLister website"
              className='border'
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-row gap-2 items-baseline">
                <h2 className="text-2xl font-bold text-left">
                  HomeLister Design System
                </h2>
                <h5 className="text-sm text-left">
                  2022
                </h5>
                </div>
              <p>Crossfunctional initiative between Product, Design, and Dev teams to create a smooth multiplatform pipeline (JIRA, Figma, Chromatic/Storybook) for implementing and maintaining a robust, reusable component library</p>
            </div>
            <Image
              src={StorybookPic}
              alt="A screenshot of a Storybook showing the SliderInput component on Chromatic"
              className='border'
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-row gap-2 items-baseline">
                <h2 className="text-2xl font-bold text-left">
                  Transactions Management
                </h2>
                <h5 className="text-sm text-left">
                  2022
                </h5>
                </div>
              <p>Refactored and greatly expanded a basic contract model into a comprehensive set of offer, escrow, and contact models, APIs, and utilities to serve as the foundation for full-lifecycle transaction management</p>
              <Badge>Sole Developer</Badge>
            </div>
            <Image
              src={ContractEscrowPic}
              alt="A screenshot of Escrow Documents History"
              className='border'
              placeholder="blur"
            />
            {/* <Image
              src={EscrowHistoryPic}
              alt="A screenshot of Escrow Documents History"
            /> */}
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-row gap-2 items-baseline">
                <h2 className="text-2xl font-bold text-left">
                  New User Listing Flow Product Tour
                </h2>
                <h5 className="text-sm text-left">
                  2022
                </h5>
                </div>
              <p>Optional onboarding tour improved top-of-funnel retention by 12%</p>
              <Badge>Sole Developer</Badge>
            </div>
            <video
              src="/hl-product-tour.mov"
              muted
              controls
              className='border'
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-row gap-2 items-baseline">
                <h2 className="text-2xl font-bold text-left">
                  A/B Testing Infrastructure
                </h2>
                <h5 className="text-sm text-left">
                  2022
                </h5>
                </div>
              <p>Support for just-in-time client and NextJS server-rendered client tests and backend server tests</p>
              <Badge>Sole Developer</Badge>
            </div>
            <Image
              src={ABTestPic}
              alt="A comparison of two HomeLister Homepage variants, one labled A and the other B"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-row gap-2 items-baseline">
                <h2 className="text-2xl font-bold text-left">
                  Brokerage Management Console
                </h2>
                <h5 className="text-sm text-left">
                  2021
                </h5>
                </div>
              <p>Admin listing search via performant API supporting multiple concurrent filters and sort</p>
            </div>
            <Image
              src={BrokerageConsolePic}
              alt="A screenshot of the admin-only brokerage console"
              className='border'
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-row gap-2 items-baseline">
                <h2 className="text-2xl font-bold text-left">
                  Performance Profiling and Optimization
                </h2>
                <h5 className="text-sm text-left">
                  2021
                </h5>
                </div>
              <p>Lifted Lightouse performance audit scores from the mid-70s into the 90s for the HomeLister homepage. Improved Google Search Rank and increased organic inbound traffic by 30%, leading to improved conversion</p>
              <Badge>Sole Developer</Badge>
            </div>
            <Image
              src={LighthousePic}
              alt="Screenshot of a Chrome Lighthouse performance audit result from June 2021 for the HomeLister homepage"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-row gap-2 items-baseline">
                <h2 className="text-2xl font-bold text-left">
                  Agreement Signature Workflow Refactor
                </h2>
                <h5 className="text-sm text-left">
                  2021
                </h5>
                </div>
              <p>Backend refactor to reduce bug surface area and cut HelloSign-based real estate agreement and amendment contract generation time by a factor of 5.</p>
              <Badge>Sole Developer</Badge>
            </div>
            <Image
              src={AgreementPic}
              alt="Screenshot of a Listing Flow Agreement Signature page"
              placeholder="blur"
              className='border'
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-row gap-2 items-baseline">
                <h2 className="text-2xl font-bold text-left">
                  HomeLister Redesign and Relaunch
                </h2>
                <h5 className="text-sm text-left">
                  2019-2020
                </h5>
                </div>
              <p>Ported an AngularJS monolith to a fully redesigned, responsive NextJS client</p>
            </div>
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
