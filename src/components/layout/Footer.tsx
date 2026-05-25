import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, ExternalLink, Phone } from 'lucide-react'

export function Footer(): ReactElement {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-xl">
              <img 
                src="/logo.png" 
                alt="Cyrus Logo" 
                className="h-16 lg:h-20 w-auto object-contain bg-white p-2 rounded-xl shadow-md transition-transform duration-300 hover:scale-105" 
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              <strong>Supporting Excellence in Children’s Residential Care</strong>. Professional consultancy and compliance support dedicated to elevating the standards of children's residential care across England.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Why Choose Us', href: '/why-us' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-brand-teal transition-colors text-sm flex items-center gap-2 group outline-none focus-visible:text-brand-teal"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Regulation 44 Visits',
                'Mock Inspections',
                'Consultancy Support',
                'Compliance Audits',
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-white/70 hover:text-brand-teal transition-colors text-sm outline-none focus-visible:text-brand-teal"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg">Get In Touch</h3>
            <div className="space-y-4">
              <a href="mailto:victoria@cyruscareconsultancy.co.uk" className="flex items-start gap-3 group outline-none">
                <Mail className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                <span className="text-white/70 group-hover:text-white transition-colors text-sm break-all">victoria@cyruscareconsultancy.co.uk</span>
              </a>
              <a href="mailto:info@cyruscareconsultancy.co.uk" className="flex items-start gap-3 group outline-none">
                <Mail className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                <span className="text-white/70 group-hover:text-white transition-colors text-sm break-all">info@cyruscareconsultancy.co.uk</span>
              </a>
              <a href="tel:+447919800304" className="flex items-start gap-3 group outline-none">
                <Phone className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                <span className="text-white/70 group-hover:text-white transition-colors text-sm">+447919 800304</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">
                  128 Griffin Court, Black Eagle Drive, Northfleet, Kent, DA11 9AP
                </span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Registration Info</p>
              <div className="bg-navy-800 p-3 rounded-lg border border-white/5">
                <p className="text-xs text-white/60 leading-tight">
                  Company Number: <span className="text-brand-teal font-medium">17218588</span>
                </p>
                <p className="text-[10px] text-white/40 mt-1 uppercase">Registered in England & Wales</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs">
            © {currentYear} Cyrus Residential Care Consultancy. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-white/40 hover:text-white text-xs transition-colors outline-none focus-visible:text-white">Privacy Policy</Link>
            <Link to="/terms" className="text-white/40 hover:text-white text-xs transition-colors outline-none focus-visible:text-white">Terms of Service</Link>
            <a href="https://www.ofsted.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-xs transition-colors flex items-center gap-1.5 outline-none focus-visible:text-white">
              Ofsted Compliance <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
