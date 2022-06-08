import React, { ReactNode } from 'react'

const Grid: React.FC<GridProps> = ({ children }) => (
  <div className="grid auto-cols-max xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6 pb-56">{children}</div>
)

export interface GridProps {
  children: ReactNode
}

export default Grid
