import React, { ReactNode } from 'react'

const Caption: React.FC<CaptionProps> = ({ children }) => <p className="text-content font-sans-light">{children}</p>

export interface CaptionProps {
  children: ReactNode
}

export default Caption
