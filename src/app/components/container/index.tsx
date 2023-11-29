import { ReactNode } from 'react'

import './container.css'

export default function Container({ primary = true, children }: { primary?: boolean, children: ReactNode }) {
  return (
    <div className={`container ${primary ? 'container__primary' : 'container__secondary'}`}>
      {children}
    </div>
  )
}
