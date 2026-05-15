import { useEffect, type ReactElement } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout(): ReactElement {
  const { pathname } = useLocation()

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* 
        Main content area 
        The pt-20 / pt-16 accounts for the fixed navbar height 
      */}
      <main className="flex-grow pt-20 lg:pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
