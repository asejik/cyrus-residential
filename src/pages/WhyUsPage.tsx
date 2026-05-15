import { type ReactElement } from 'react'
import { Award, BookOpen, Search, Users, ShieldCheck, TrendingUp, Handshake } from 'lucide-react'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Link } from 'react-router-dom'

const strengths = [
  {
    title: 'Specialist Knowledge',
    description: 'Deep understanding of the children’s residential care sector, specifically tailored to the unique regulatory environment in England.',
    icon: BookOpen
  },
  {
    title: 'Ofsted Expectations',
    description: 'Expert alignment with the Social Care Common Inspection Framework (SCCIF) and Ofsted’s "Outstanding" criteria.',
    icon: Award
  },
  {
    title: 'Independent Rigour',
    description: 'We provide an unbiased, critical eye that ensures your home meets and exceeds the national minimum standards.',
    icon: Search
  },
  {
    title: 'Safeguarding Focus',
    description: 'Child protection is at the heart of our practice. We evaluate and strengthen your safeguarding culture and systems.',
    icon: ShieldCheck
  },
  {
    title: 'Strategic Partnership',
    description: 'We don’t just find faults; we act as a partner in your home’s journey toward excellence and sustainable growth.',
    icon: Handshake
  },
  {
    title: 'Practical Insight',
    description: 'Our recommendations are grounded in reality—achievable, impactful steps that lead to measurable improvements.',
    icon: TrendingUp
  },
  {
    title: 'Provider-Led Experience',
    description: 'Our consultants have been on the front line, providing empathy and understanding alongside rigorous professional standards.',
    icon: Users
  }
]

export default function WhyUsPage(): ReactElement {
  usePageMeta({
    title: 'Why Choose Us',
    description: 'Discover the 7 key strengths that set Cyrus Residential Care Consultancy apart. From specialist knowledge to strategic partnership, find out why providers trust us.'
  })

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-brand-navy py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-white text-h1 font-bold mb-6">Why Choose Us</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            What sets Cyrus RCC apart is our unique blend of rigorous professional standards 
            and deep-rooted commitment to the welfare of children.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 -skew-x-12 translate-x-1/4" />
      </section>

      {/* Main Grid Section */}
      <section className="py-24 bg-white" aria-labelledby="strengths-heading">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Sidebar / Intro */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
              <div className="space-y-4">
                <h2 id="strengths-heading" className="text-brand-navy text-h2 font-bold leading-tight">
                  7 Core Pillars of Our Excellence
                </h2>
                <div className="h-1.5 w-20 bg-brand-teal rounded-full" />
              </div>
              <p className="text-gray-600 text-lg">
                Choosing a consultancy is a critical decision for any care provider. 
                We have built our reputation on these seven key strengths, ensuring 
                you receive a service that is both authoritative and supportive.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 text-brand-navy font-bold hover:text-brand-teal transition-all group border-b-2 border-brand-teal pb-1"
                >
                  Start your journey with us
                  <ShieldCheck className="w-5 h-5 transition-transform group-hover:scale-110" />
                </Link>
              </div>
            </div>

            {/* Strengths Grid */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
              {strengths.map((strength, index) => (
                <div 
                  key={strength.title}
                  className={`p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${
                    index === strengths.length - 1 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="w-12 h-12 bg-brand-surface rounded-xl flex items-center justify-center mb-6 text-brand-teal group-hover:bg-brand-navy transition-colors duration-300">
                    <strength.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="text-brand-navy font-bold text-xl mb-4">{strength.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote Banner */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            <span className="text-brand-teal font-bold tracking-[0.3em] text-xs uppercase">
              Our Professional Promise
            </span>
            <h2 className="text-white text-h3 md:text-h2 font-heading leading-snug">
              "We provide the rigour of an inspector with the heart of a practitioner. 
              Our goal is never just to find fault, but to illuminate the path toward 
              outstanding care."
            </h2>
            <div className="flex justify-center items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center text-brand-navy font-bold">
                C
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Director of Consultancy</p>
                <p className="text-white/40 text-xs uppercase tracking-wider">Cyrus Residential Care Consultancy</p>
              </div>
            </div>
          </div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
      </section>

      {/* Ready to start? */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-brand-navy text-h2 font-bold mb-8">Ready to achieve excellence?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-teal text-brand-navy px-12 py-5 rounded-xl font-bold text-lg hover:bg-teal-300 transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            GET IN TOUCH NOW
          </Link>
        </div>
      </section>
    </div>
  )
}
