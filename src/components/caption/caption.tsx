import React, { ReactNode } from 'react'

const Caption: React.FC<CaptionProps> = ({ children }) => <p className="text-caption font-sans-semibold">{children}</p>

export interface CaptionProps {
  children: ReactNode
}

export default Caption
