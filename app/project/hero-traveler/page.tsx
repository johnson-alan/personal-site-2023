import Image from 'next/image'

import SelectedWorkInformation from '../SelectedProjectInformation'

import HomepagePic from '../../../public/hero-traveler/ht-homepage-group.png'
import PostcardPic from '../../../public/hero-traveler/ht-postcard.png'
import StoryEditorPic from '../../../public/hero-traveler/ht-story-editor.png'
import StoryViewPic from '../../../public/hero-traveler/ht-story-view.png'
import NotificationsPic from '../../../public/hero-traveler/ht-notifications.png'
import SearchPic from '../../../public/hero-traveler/ht-search.png'
import SearchResultsPic from '../../../public/hero-traveler/ht-search-results.png'

export default function HeroTraveler() {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={HomepagePic}
        alt="A screenshot of the homepage of the HomeLister website"
        priority
      />
      <p className="text-1xl text-left">
        Hero Traveler is a social media platform for travel enthusiasts that allows users to create, share, plan, and book travel experiences curated by their peers and travel experts. Hero Traveler is built on a shared codebase for iOS and web using React and React Native.
      </p>
      <h1 className="text-3xl font-bold text-left">Selected Work</h1>
      <div className="flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Postcards"
            description="Instagram Stories-style feature allowing users to create a digital &quot;postcard&quot; from their photos."
            timePeriod='2019'
          />
          <Image
            src={PostcardPic}
            alt="Two screenshots of the Hero Traveler postcard feature, one of creation and the other of the feed view displaying published postcards"
            placeholder="blur"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Improved Story Editor"
            description="Rich text editor for creating stories with photos, videos, multiple text types, and inline styles."
            timePeriod='2018-2019'
            soleDeveloper
          />
          <Image
            src={StoryEditorPic}
            alt="A screenshot of the Hero Traveler story editor editing a story about a trip to Morocco"
            className='border'
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Story View Improvements"
            description="Improved story viewing experience with a new floating sidebar design"
            timePeriod='2018-2019'
          />
          <Image
            src={StoryViewPic}
            alt="A screenshot of the Hero Traveler story view with a floating sidebar"
            className='border'
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Notifications"
            description="SNS-based notifications system for user interactions with custom in-app fallback"
            timePeriod='2018'
          />
          <Image
            src={NotificationsPic}
            alt="Twoscreenshot of the Hero Traveler notifications system, one of the notifications feed and the other of the a  custom in-app notification appearing above a story"
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Location Search"
            description="Fuzzy location search with realtime results via Google Places API and Algolia"
            timePeriod='2018'
            soleDeveloper
          />
          <Image
            src={SearchPic}
            alt="A screenshot of the Hero Traveler location search feature"
            className='border'
            placeholder="blur"
          />
          <Image
            src={SearchResultsPic}
            alt="A screenshot of the Hero Traveler location search feature displaying search results"
            className='border'
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}
