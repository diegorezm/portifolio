import { ReactNode } from "react";
import './special.css'
export default function Special({ children }: { children: ReactNode }) {
  return (
    <span className="special">
      {children}
    </span>
  )
}
