import React, { ReactNode } from 'react'

const Heading: React.FC<HeadingProps> = ({ children }) => (
  <p className="text-center text-heading font-sans-light pb-14">{children}</p>
)

export interface HeadingProps {
  children: ReactNode
}

export default Heading
