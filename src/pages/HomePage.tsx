import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, FileText, Search, ClipboardCheck, ChevronRight } from 'lucide-react'
import { usePageMeta } from '@/hooks/usePageMeta'

const services = [
  {
    title: 'Regulation 44 Visits',
    description: 'Independent, rigorous monthly inspections to ensure the highest standards of care and compliance with Ofsted requirements.',
    icon: ShieldCheck,
    href: '/services'
  },
  {
    title: 'Consultancy Support',
    description: 'Expert strategic advice for providers, helping you navigate complex regulatory landscapes and improve service delivery.',
    icon: FileText,
    href: '/services'
  },
  {
    title: 'Mock Inspections',
    description: 'Comprehensive "Ofsted-style" evaluations to identify gaps and prepare your team for the real inspection day.',
    icon: Search,
    href: '/services'
  },
  {
    title: 'Compliance Audits',
    description: 'Deep-dive audits into your systems, records, and processes to ensure ongoing adherence to statutory requirements.',
    icon: ClipboardCheck,
    href: '/services'
  }
]

export default function HomePage(): ReactElement {
  usePageMeta({
    title: 'Professional Consultancy & Compliance Support',
    description: 'Cyrus Residential Care Consultancy provides expert Regulation 44 visits, mock inspections, and compliance audits for children\'s residential care providers in England.'
  })

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex items-center bg-brand-navy overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=1600"
            alt=""
            className="w-full h-full object-cover opacity-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-24">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-bold tracking-widest uppercase">
              Supporting Excellence in Children’s Residential Care
            </div>
            <h1
              id="hero-heading"
              className="text-white text-display font-bold leading-tight"
            >
              Professional Consultancy & Compliance Support for Children’s Homes
            </h1>
            <p className="text-white/80 text-xl max-w-2xl leading-relaxed">
              Elevating the standards of residential care through expert-led inspections,
              strategic consultancy, and rigorous compliance auditing across England.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/services"
                className="bg-brand-teal text-brand-navy px-8 py-4 rounded-lg font-bold tracking-wide hover:bg-teal-300 transition-all shadow-lg hover:-translate-y-1 flex items-center gap-2 group"
              >
                OUR SERVICES
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold tracking-wide hover:bg-white hover:text-brand-navy transition-all hover:-translate-y-1"
              >
                SPEAK WITH OUR TEAM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white" aria-labelledby="intro-heading">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 id="intro-heading" className="text-brand-navy text-h2 font-bold">
                A Partner in Excellence
              </h2>
              <div className="h-1.5 w-20 bg-brand-teal rounded-full" />
              <p className="text-gray-600 text-lg leading-relaxed">
                At Cyrus Residential Care Consultancy, we understand the immense responsibility of providing
                high-quality care for children. Our mission is to support providers in achieving and
                maintaining excellence through independent oversight and expert guidance.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With deep specialist knowledge of Ofsted expectations and the Children's Homes Regulations,
                we provide the clarity and confidence you need to excel in every inspection.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-teal transition-colors group"
              >
                Learn more about our mission
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1714976326945-b5c432e6d501?q=80&w=1332&?auto=format&fit=crop&q=80&w=1000"
                alt="Cozy modern family living room interior representing residential home environment"
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-surface rounded-full z-0" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-teal/5 rounded-2xl z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brand-surface" aria-labelledby="services-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 id="services-heading" className="text-brand-navy text-h2 font-bold">
              Our Core Services
            </h2>
            <p className="text-gray-500 text-lg">
              Tailored solutions designed to ensure compliance, mitigate risk, and enhance the quality of care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-card hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-teal transition-colors">
                  <service.icon className="w-7 h-7 text-brand-teal group-hover:text-brand-navy transition-colors" />
                </div>
                <h3 className="text-brand-navy text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="text-brand-navy text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2 hover:text-brand-teal transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal rounded-full blur-[120px] -ml-48 -mb-48" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 className="text-white text-h2 font-bold max-w-2xl mx-auto">
            Ready to enhance your home's compliance standards?
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Join the leading providers across England who trust Cyrus RCC for their regulatory support.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-navy px-10 py-4 rounded-lg font-bold tracking-wide hover:bg-brand-teal transition-all shadow-xl hover:-translate-y-1"
            >
              CONTACT US TODAY
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
