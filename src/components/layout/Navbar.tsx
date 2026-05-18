import { useState, useEffect, type ReactElement } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why Choose Us', href: '/why-us' },
]

export function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false)
  }, [location])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center',
        isScrolled || isOpen
          ? 'bg-white shadow-nav h-16'
          : 'bg-transparent h-20'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center group outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg animate-in fade-in duration-500"
          aria-label="Cyrus Home"
        >
          <img 
            src="/logo.png" 
            alt="Cyrus Logo" 
            className={cn(
              "w-auto object-contain transition-all duration-300 group-hover:scale-105",
              isScrolled || isOpen ? "h-12" : "h-14 lg:h-16"
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors hover:text-brand-teal py-2 outline-none focus-visible:text-brand-teal',
                    location.pathname === link.href ? 'text-brand-teal' : 'text-brand-navy/80'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="bg-brand-navy text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wider hover:bg-navy-800 transition-all shadow-sm active:scale-95 flex items-center gap-2 group"
          >
            CONTACT US
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 flex items-center justify-center text-brand-navy hover:bg-brand-surface rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 top-16 bg-white z-40 transition-transform duration-300 lg:hidden flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex-1 px-6 py-8 flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    'text-lg font-heading font-bold flex items-center justify-between p-4 rounded-xl transition-colors',
                    location.pathname === link.href 
                      ? 'bg-brand-surface text-brand-teal' 
                      : 'text-brand-navy hover:bg-brand-surface'
                  )}
                >
                  {link.label}
                  <ChevronRight className="w-5 h-5 opacity-50" />
                </Link>
              </li>
            ))}
          </ul>
          
          <Link
            to="/contact"
            className="mt-auto bg-brand-navy text-white p-5 rounded-2xl text-center font-bold tracking-widest text-lg shadow-card active:scale-95 transition-all mb-8"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </nav>
  )
}
