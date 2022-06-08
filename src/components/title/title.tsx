import React, { ReactNode } from 'react'

const Title: React.FC<TitleProps> = ({ children }) => (
  <p className="text-title pb-2.5 font-sans-light border-b-white border-b border-solid mb-19">{children}</p>
)

export interface TitleProps {
  children: ReactNode
}

export default Title
