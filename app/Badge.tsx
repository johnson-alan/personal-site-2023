import { ReactNode, FunctionComponent } from "react"

interface BadgeProps {
  children: ReactNode;
}

const Badge: FunctionComponent<BadgeProps> = ({ children }) => (
  <span className="bg-blue-100 text-blue-700 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{children}</span>
)

export default Badge
