import React, { ReactNode } from 'react'

const Layout: React.FC<LayoutProps> = ({ children, loading }) => (
  <>
    {loading && (
      <div className="flex justify-center items-center fixed top-0 h-full w-full text-center z-10">
        <p className="text-center text-xl text-white">Loading ...</p>
      </div>
    )}
    <div className="xl:px-28 md:px-14 sm:px-7 px-5 xl:pt-48 md:pt-36 sm:pt-24 pt-16 bg-black text-white">
      {children}
    </div>
  </>
)

export interface LayoutProps {
  children: ReactNode
  loading: boolean
}

export default Layout
