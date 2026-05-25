import { type ReactElement } from 'react'
import { Mail, MapPin, ShieldAlert, Clock, Building2, Phone } from 'lucide-react'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ContactForm } from '@/components/common/ContactForm'

export default function ContactPage(): ReactElement {
  usePageMeta({
    title: 'Contact Us',
    description: 'Get in touch with Cyrus Residential Care Consultancy for Regulation 44 visits, mock inspections, and compliance support. Our team of experts is ready to assist your care home.'
  })

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-brand-surface -z-10 h-[60vh]" />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Info & Legal */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <span className="text-brand-teal font-bold tracking-[0.2em] text-xs uppercase">
                  Let's Connect
                </span>
                <h1 className="text-brand-navy text-display font-bold leading-tight">
                  Speak With Our Consultancy Team
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you are seeking independent Regulation 44 oversight, preparing for an inspection, 
                  or require strategic consultancy, we are here to support your journey toward excellence.
                </p>
              </div>

              {/* Contact Grid */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand-navy font-bold">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-teal">
                      <Mail className="w-5 h-5" />
                    </div>
                    Email Us
                  </div>
                  <div className="space-y-1">
                    <a href="mailto:victoria@cyruscareconsultancy.co.uk" className="text-gray-500 hover:text-brand-teal transition-colors block text-sm break-all">
                      victoria@cyruscareconsultancy.co.uk
                    </a>
                    <a href="mailto:info@cyruscareconsultancy.co.uk" className="text-gray-500 hover:text-brand-teal transition-colors block text-sm break-all">
                      info@cyruscareconsultancy.co.uk
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-brand-navy font-bold">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-teal">
                      <Phone className="w-5 h-5" />
                    </div>
                    Call Us
                  </div>
                  <a href="tel:+447919800304" className="text-gray-500 hover:text-brand-teal transition-colors block text-sm">
                    +447919 800304
                  </a>
                </div>

                <div className="space-y-3 sm:col-span-2">
                  <div className="flex items-center gap-3 text-brand-navy font-bold">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-teal">
                      <MapPin className="w-5 h-5" />
                    </div>
                    Our Address
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    128 Griffin Court, Black Eagle Drive, Northfleet, Kent, DA11 9AP
                  </p>
                </div>

                <div className="space-y-3 sm:col-span-2">
                  <div className="flex items-center gap-3 text-brand-navy font-bold">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-teal">
                      <Clock className="w-5 h-5" />
                    </div>
                    Hours
                  </div>
                  <p className="text-gray-500 text-sm">
                    Mon — Fri: 09:00 - 17:30
                  </p>
                </div>
              </div>

              {/* Legal / Trust Box */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-surface rounded-xl flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="text-brand-navy font-bold">Registered Entity</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mt-1">
                      Cyrus Residential Care Consultancy Ltd is registered in England and Wales.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-surface p-4 rounded-lg">
                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Company No.</p>
                    <p className="text-brand-navy font-bold text-sm">17218588</p>
                  </div>
                  <div className="bg-brand-surface p-4 rounded-lg">
                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Service Area</p>
                    <p className="text-brand-navy font-bold text-sm">England Only</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-brand-navy rounded-xl text-white">
                  <ShieldAlert className="w-5 h-5 text-brand-teal shrink-0" />
                  <p className="text-[10px] uppercase tracking-widest font-bold">
                    Safeguarding Compliant Service
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-50 relative overflow-hidden">
                {/* Decorative teal bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-brand-teal" />
                
                <div className="mb-10">
                  <h2 className="text-brand-navy text-h3 font-bold mb-2">Send an Enquiry</h2>
                  <p className="text-gray-400 text-sm">Fill out the form below and we'll respond within 24 hours.</p>
                </div>

                <ContactForm />
              </div>
              
              {/* Emergency / Direct contact hint */}
              <div className="mt-8 flex items-center justify-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                Providing professional oversight across all regions of England
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
