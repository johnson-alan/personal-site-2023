import { FunctionComponent } from "react"
import Badge from '../Badge'

interface SelectedWorkInformationProps {
  title: string
  timePeriod: string
  description: string
  soleDeveloper?: boolean
}

const SelectedWorkInformation: FunctionComponent<SelectedWorkInformationProps> = ({
  title,
  timePeriod,
  description,
  soleDeveloper,
}) => (
  <div>
    <div className="flex flex-col md:flex-row md:gap-2 items-baseline pb-1 md:pb-0">
      <h2 className="text-2xl font-bold text-left">
        {title}
      </h2>
      <h5 className="text-sm text-left">
        {timePeriod}
      </h5>
    </div>
    <p>{description}</p>
    {soleDeveloper && <Badge>Sole Developer</Badge>}
  </div>
)

export default SelectedWorkInformation
