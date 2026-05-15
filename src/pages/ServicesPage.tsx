import { type ReactElement } from 'react'
import { ShieldCheck, Search, FileText, ClipboardCheck, CheckCircle2, ArrowRight } from 'lucide-react'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'regulation-44',
    title: 'Regulation 44 Visits',
    subtitle: 'Independent Monthly Oversight',
    description: 'Our Regulation 44 visits provide a robust, independent evaluation of your home’s care standards. We focus on the welfare of children, the quality of care provided, and the effectiveness of management.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000',
    includes: [
      'Monthly rigorous independent inspections',
      'Interviews with children, staff, and parents',
      'Observation of daily life and care practices',
      'Comprehensive reporting with clear action plans',
      'Adherence to the latest Ofsted inspection frameworks'
    ]
  },
  {
    id: 'consultancy',
    title: 'Consultancy Support',
    subtitle: 'Strategic Growth & Management',
    description: 'We partner with providers to strengthen their operational foundations. Whether you are opening a new home or looking to improve a "Requires Improvement" rating, our consultancy provides a roadmap to success.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    includes: [
      'Strategic planning for new providers',
      'Service development and improvement plans',
      'Management coaching and mentoring',
      'Policy and procedure development',
      'Risk management and safeguarding reviews'
    ]
  },
  {
    id: 'mock-inspections',
    title: 'Mock Inspections',
    subtitle: 'Preparedness & Quality Assurance',
    description: 'Prepare your team for the pressures of a real Ofsted inspection. Our mock inspections mirror the current Social Care Common Inspection Framework (SCCIF), identifying blind spots before the inspectors arrive.',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
    includes: [
      'Full "Ofsted-style" evaluation across all key areas',
      'Feedback sessions for managers and staff',
      'Pre-inspection documentation review',
      'Detailed report highlighting strengths and weaknesses',
      'Post-mock support to address identified gaps'
    ]
  },
  {
    id: 'compliance-audits',
    title: 'Compliance Audits',
    subtitle: 'Systems & Data Integrity',
    description: 'A deep-dive audit service ensuring your administrative and operational systems are watertight. We review your records to ensure they meet the rigorous statutory requirements of the Children’s Homes Regulations.',
    icon: ClipboardCheck,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    includes: [
      'Staff recruitment and file auditing',
      'Safeguarding and incident record reviews',
      'Health and safety compliance checks',
      'Case file and daily record auditing',
      'Data protection and GDPR readiness reviews'
    ]
  }
]

export default function ServicesPage(): ReactElement {
  usePageMeta({
    title: 'Our Services',
    description: 'Comprehensive regulatory support including Regulation 44 visits, consultancy, mock inspections, and compliance audits for children\'s residential care homes.'
  })

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-brand-navy py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-white text-h1 font-bold mb-6">Our Services</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional, independent regulatory services designed to ensure your home 
            remains compliant and provides the highest quality of care.
          </p>
        </div>
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(30deg,#4A90E2_12%,transparent_12.5%,transparent_87%,#4A90E2_87.5%,#4A90E2_100%)] bg-[length:80px_140px]" />
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 space-y-32">
        {services.map((service, index) => (
          <div key={service.id} className="container mx-auto px-6">
            <article 
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative z-10">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                  {/* Floating icon badge */}
                  <div className="absolute -top-6 -left-6 lg:-left-10 bg-brand-navy p-5 rounded-2xl shadow-card text-brand-teal hidden sm:block">
                    <service.icon className="w-10 h-10" />
                  </div>
                </div>
                {/* Decorative background shape */}
                <div className={`absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-brand-surface rounded-2xl -z-10 ${
                  index % 2 === 1 ? 'lg:-left-10 lg:right-auto' : ''
                }`} />
              </div>

              {/* Text side */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="space-y-2">
                  <span className="text-brand-teal font-bold tracking-widest text-xs uppercase block mb-2">
                    {service.subtitle}
                  </span>
                  <h2 className="text-brand-navy text-h2 font-bold leading-tight">
                    {service.title}
                  </h2>
                  <div className="h-1.5 w-20 bg-brand-teal rounded-full" />
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-6">
                  <h3 className="text-brand-navy font-bold text-sm uppercase tracking-wider">
                    Service Includes:
                  </h3>
                  <ul className="grid gap-4">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 group">
                        <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                        <span className="text-gray-600 group-hover:text-brand-navy transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-navy-800 transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    Enquire About This Service
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        ))}
      </section>

      {/* Trust Quote / Summary */}
      <section className="py-24 bg-brand-surface">
        <div className="container mx-auto px-6">
          <div className="bg-white p-12 lg:p-20 rounded-3xl shadow-sm border border-gray-100 text-center space-y-8">
            <div className="flex justify-center">
              <ShieldCheck className="w-16 h-16 text-brand-teal" />
            </div>
            <h2 className="text-brand-navy text-h3 font-bold max-w-2xl mx-auto">
              Our services are rooted in the belief that every child deserves a safe, 
              nurturing environment where they can thrive.
            </h2>
            <div className="flex justify-center gap-4">
              <div className="h-1 w-12 bg-brand-teal/20 rounded-full" />
              <div className="h-1 w-12 bg-brand-teal rounded-full" />
              <div className="h-1 w-12 bg-brand-teal/20 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
