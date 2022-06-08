import React, { ReactNode } from 'react'

const Highlight: React.FC<HighlightProps> = ({ children }) => (
  <p className="text-content font-sans-semibold text-custom-red">{children}</p>
)

export interface HighlightProps {
  children: ReactNode
}

export default Highlight
