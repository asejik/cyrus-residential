import { type ReactElement } from 'react'
import { Shield, Eye, Target, Award, Users, Heart, Scale, Lightbulb } from 'lucide-react'
import { usePageMeta } from '@/hooks/usePageMeta'

const values = [
  { title: 'Quality of Care', icon: Heart, description: 'Prioritising the wellbeing and outcomes of every child.' },
  { title: 'Integrity', icon: Scale, description: 'Maintaining honest, transparent, and ethical standards.' },
  { title: 'Compliance', icon: Shield, description: 'Strict adherence to statutory and regulatory frameworks.' },
  { title: 'Child-Centered', icon: Users, description: 'Ensuring children\'s voices are at the heart of practice.' },
  { title: 'Expertise', icon: Award, description: 'Providing high-level specialist knowledge and insight.' },
  { title: 'Empowerment', icon: Lightbulb, description: 'Supporting providers to achieve sustainable excellence.' },
  { title: 'Objectivity', icon: Eye, description: 'Delivering unbiased, rigorous independent evaluations.' },
  { title: 'Commitment', icon: Target, description: 'Dedicated to continuous improvement and service growth.' }
]

export default function AboutPage(): ReactElement {
  usePageMeta({
    title: 'About Us',
    description: 'Learn about the mission, vision, and core values of Cyrus Residential Care Consultancy. We are committed to elevating care standards through expert compliance support.'
  })

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-brand-navy py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-white text-h1 font-bold mb-4">About Us</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A specialized consultancy dedicated to the children's residential care sector in England.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-brand-teal)_0%,_transparent_70%)]" />
      </section>

      {/* Split Content Section */}
      <section className="py-24 bg-white" aria-labelledby="mission-heading">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional team meeting in a clean office" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-surface rounded-2xl z-0 border border-gray-100" />
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 id="mission-heading" className="text-brand-navy text-h2 font-bold leading-tight">
                  Driving Compliance, Improving Outcomes
                </h2>
                <div className="h-1.5 w-20 bg-brand-teal rounded-full" />
              </div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Cyrus Residential Care Consultancy, we are passionate about elevating the standards of 
                  care for children. Our team brings together years of front-line experience and 
                  regulatory expertise to help providers build safer, more effective homes.
                </p>
                <p>
                  We act as a critical friend—providing the rigorous independent oversight required by 
                  law, while offering the strategic guidance needed to navigate the complexities 
                  of Ofsted inspections and statutory compliance.
                </p>
              </div>

              {/* Mission/Vision Callouts */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <blockquote className="p-8 bg-brand-surface border-l-4 border-brand-navy rounded-r-xl">
                  <h3 className="font-heading font-bold text-brand-navy mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-brand-teal" />
                    Our Mission
                  </h3>
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    "To support residential providers in achieving outstanding outcomes for children 
                    through robust independent oversight and expert-led compliance support."
                  </p>
                </blockquote>
                
                <blockquote className="p-8 bg-brand-navy text-white rounded-xl shadow-lg">
                  <h3 className="font-heading font-bold mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-brand-teal" />
                    Our Vision
                  </h3>
                  <p className="text-sm text-white/70 italic leading-relaxed">
                    "To be the most trusted partner for compliance excellence in the children's 
                    residential care sector across England."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-brand-surface" aria-labelledby="values-heading">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 id="values-heading" className="text-brand-navy text-h2 font-bold">
              Our Core Values
            </h2>
            <p className="text-gray-500">
              The principles that guide every visit, audit, and consultation we undertake.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <article 
                key={value.title}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center mb-6 text-brand-teal">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-brand-navy font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations / Trust Banner */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-8">
            Working in alignment with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
            <span className="text-xl font-bold tracking-tighter">Ofsted Standards</span>
            <span className="text-xl font-bold tracking-tighter">Children's Regulations 2015</span>
            <span className="text-xl font-bold tracking-tighter">GDPR Compliant</span>
            <span className="text-xl font-bold tracking-tighter">Quality Care Framework</span>
          </div>
        </div>
      </section>
    </div>
  )
}
