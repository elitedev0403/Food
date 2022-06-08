import React, { ReactNode } from 'react'

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="xl:px-28 md:px-14 sm:px-7 px-5 xl:pt-48 md:pt-36 sm:pt-24 pt-16 bg-black text-white">{children}</div>
)

export interface LayoutProps {
  children: ReactNode
}

export default Layout
