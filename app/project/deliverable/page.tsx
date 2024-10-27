import Image from 'next/image'

import SelectedWorkInformation from '../SelectedProjectInformation'

import HomepagePic from '../../../public/deliverable/del-homepage.png'

import AgencyBrainPic from '../../../public/deliverable/del-agency-brain.png'
import AgencyBrainMentionsPic from '../../../public/deliverable/del-agency-brain-mentions.png'
import AgencyBrainAnswerPic from '../../../public/deliverable/del-agency-brain-answer.png'

import ProjectPlanTimelinePic from '../../../public/deliverable/del-project-plan-timeline.png'
import ProjectPlanListPic from '../../../public/deliverable/del-project-plan-list.png'
import ProjectPlanSchedulerPic from '../../../public/deliverable/del-project-plan-scheduler.png'
import ProjectPlanCommandMenuPic from '../../../public/deliverable/del-project-plan-command-menu.png'
import ProjectPlanDragAndDropLineItemPic from '../../../public/deliverable/del-project-plan-dnd-line-item.png'
import ProjectPlanDragAndDropRolePic from '../../../public/deliverable/del-project-plan-dnd-role.png'

import TimeTrackingEntryPic from '../../../public/deliverable/del-time-tracking-entry.png'
import TimeTrackingTimesheetPic from '../../../public/deliverable/del-time-tracking-timesheet.png'
import TimeTrackingApprovalsPic from '../../../public/deliverable/del-time-tracking-approvals.png'

import ResourcingPic from '../../../public/deliverable/del-resourcing.png'

import ProjectOverviewPic from '../../../public/deliverable/del-project-overview.png'

import AgencyGeneralPic from '../../../public/deliverable/del-agency-general.png'
import AgencyMembersPic from '../../../public/deliverable/del-agency-members.png'
// import AgencyClientsPic from '../../../public/deliverable/del-agency-clients.png'
import AgencyRatesPic from '../../../public/deliverable/del-agency-rates.png'
import AgencyTimeTrackingPic from '../../../public/deliverable/del-agency-time-tracking.png'

import LayoutPic from '../../../public/deliverable/del-layout.png'

export default function HomeLister() {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={HomepagePic}
        alt="A screenshot of the homepage of the Deliverable marketing website"
        priority
      />
      <p className="text-1xl text-left">
        Deliverable is an end-to-end, AI-powered platform solution for creative agencies, allowing them to create estimates and Scopes of Work, plan and resource projects, and track time and expenses through delivery. Using cutting-edge AI, Deliverable processes company documents and historical data to deliver insights and recommendations that help agencies make better decisions and improve their bottom line.
      </p>
      <h1 className="text-3xl font-bold text-left">Selected Work</h1>
      <div className="flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Project Plan Builder"
            timePeriod="2023 - 2024"
            description="Editor for estimating, resourcing, and delivering projects based on template agency services"
            soleDeveloper
          />
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-1xl font-bold text-left">Timeline View</h3>
                <p>Fully-featured, custom-built Gantt chart view for visualizing and editing project plans and resource allocations</p>
              </div>
              <Image
                src={ProjectPlanTimelinePic}
                alt="Screenshot of the Project Plan page in timeline view"
                placeholder="blur"
                className='border'
              />
            </div>
            <div className="flex flex-col gap-4">
            <div>
                <h3 className="text-1xl font-bold text-left">List View</h3>
                <p>Drag-and-drop enabled, recursively rendered list view</p>
              </div>
              <Image
                src={ProjectPlanListPic}
                alt="Screenshot of the Project Plan page in list view"
                placeholder="blur"
                className='border'
              />
              <div className='flex flex-col gap-2 pt-4 text-gray-500'>
                <p className="text-sm">Custom vertical-scroll calendar for resource scheduling</p>
                <Image
                  src={ProjectPlanSchedulerPic}
                  alt="Screenshot of the Project Plan page list view schduler dialog"
                  placeholder="blur"
                  className='border'
                />
              </div>
              <div className='flex flex-col gap-2 pt-4 text-gray-500'>
                <p className="text-sm">Fuzzy search command menu for inserting template services into project plans</p>
                <Image
                  src={ProjectPlanCommandMenuPic}
                  alt="Screenshot of the Project Plan page list view service insertion command menu"
                  placeholder="blur"
                  className='border'
                />
              </div>
              <div className='flex flex-col gap-2 pt-4 text-gray-500'>
                <p className="text-sm">Live drag-and-drop for plan line items and roles</p>
                <Image
                  src={ProjectPlanDragAndDropLineItemPic}
                  alt="Screenshot of the Project Plan page list view drag and drop for line items"
                  placeholder="blur"
                  className='border'
                />
                <Image
                  src={ProjectPlanDragAndDropRolePic}
                  alt="Screenshot of the Project Plan page list view drag and drop for roles"
                  placeholder="blur"
                  className='border'
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Agency Brain Chat"
            timePeriod="2023 - 2024"
            description="LLM-based chatbot allowing users to ask questions about their uploaded documents (via RAG) or historical or platform project data"
          />
          <Image
            src={AgencyBrainPic}
            alt="A screenshot of the Agency Brain Chat"
            className='border'
            placeholder="blur"
            priority
          />
          <Image
            src={AgencyBrainMentionsPic}
            alt="A screenshot of tagged mentions in the Agency Brain Chat"
            className='border'
            placeholder="blur"
            priority
          />
          <Image
            src={AgencyBrainAnswerPic}
            alt="A screenshot of an answer in the Agency Brain Chat"
            className='border'
            placeholder="blur"
            priority
          />
          <video
            src="/deliverable/del-agency-brain-flow.mp4#t=0.001"
            muted
            controls
            className='border'
          />
        </div>
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
              title="Time Tracking"
              timePeriod="2024"
              description="Time entry and admin approval flows achieving functional parity with industry leaders like Harvest"
          />
          <Image
            src={TimeTrackingEntryPic}
            alt="A screenshot of the time-tracking entry dialog"
            className='border'
            placeholder="blur"
          />
          <Image
            src={TimeTrackingTimesheetPic}
            alt="A screenshot of a user's time-tracking timesheet for a given week"
            className='border'
            placeholder="blur"
          />
          <Image
            src={TimeTrackingApprovalsPic}
            alt="A screenshot of the admin time-tracking approvals page"
            className='border'
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Cross-Project Resourcing"
            timePeriod="2024"
            description="Infinite-scroll timeline for visualizing employee resource allocations across active projects on multiple timescales"
            soleDeveloper
          />
          <Image
            src={ResourcingPic}
            alt="A screenshot of a cross-project resourcing timeline view"
            className='border'
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Project Data Charts"
            timePeriod="2024"
            description="Project burndown charts built with Recharts and custom styling"
          />
          <Image
            src={ProjectOverviewPic}
            alt="A screenshot of a project's overview page"
            className='border'
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Agency Configuration Screens"
            timePeriod="2023-2024"
            description="Beautiful forms and data views extended from shadcn/Radix UI primitives with Tailwind CSS"
          />
          <Image
            src={AgencyGeneralPic}
            alt="A screenshot of a project's agency general settings page"
            className='border'
            placeholder="blur"
          />
          <Image
            src={AgencyMembersPic}
            alt="A screenshot of a project's agency user settings page"
            className='border'
            placeholder="blur"
          />
          {/* <Image
            src={AgencyClientsPic}
            alt="A screenshot of a project's agency clients settings page"
            className='border'
            placeholder="blur"
          /> */}
          <Image
            src={AgencyRatesPic}
            alt="A screenshot of a project's agency rates settings page"
            className='border'
            placeholder="blur"
          />
          <Image
            src={AgencyTimeTrackingPic}
            alt="A screenshot of a project's agency time tracking settings page"
            className='border'
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col gap-4">
          <SelectedWorkInformation
            title="Site Layout and Overall Frontend Architecture"
            timePeriod="2023"
            description="Built with Next.js, Tailwind CSS, TypeScript, and React Query with tRPC for data fetching"
            soleDeveloper
          />
          <Image
            src={LayoutPic}
            alt="A screenshot of the site homepage"
            className='border'
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}
