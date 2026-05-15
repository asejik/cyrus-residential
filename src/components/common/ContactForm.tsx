import { useState, type ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import emailjs from '@emailjs/browser'
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/validation'
import { cn } from '@/lib/utils'

export function ContactForm(): ReactElement {
  const [isThrottled, setIsThrottled] = useState(false)
  const [throttleRemaining, setThrottleRemaining] = useState(0)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Mock successful submission if keys are missing (for local testing/dev)
      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS keys missing. Mocking successful submission...')
        return new Promise((resolve) => setTimeout(resolve, 2000))
      }

      return emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || 'Not provided',
          service: data.serviceInterest,
          message: data.message
        },
        publicKey
      )
    },
    onSuccess: () => {
      reset()
      startThrottle()
    }
  })

  const startThrottle = () => {
    setIsThrottled(true)
    setThrottleRemaining(60)
    
    const interval = setInterval(() => {
      setThrottleRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setIsThrottled(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const onSubmit = (data: ContactFormData) => {
    if (isThrottled) return
    mutation.mutate(data)
  }

  if (mutation.isSuccess) {
    return (
      <div className="text-center py-12 px-6 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-brand-teal" />
        </div>
        <h3 className="text-brand-navy text-2xl font-bold mb-4">Message Sent Successfully</h3>
        <p className="text-gray-600 mb-8 max-w-sm mx-auto">
          Thank you for reaching out. A member of our consultancy team will be in touch shortly to discuss your requirements.
        </p>
        <button
          onClick={() => mutation.reset()}
          className="text-brand-navy font-bold text-sm underline hover:text-brand-teal transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6"
      noValidate
    >
      {mutation.isError && (
        <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-800 text-sm animate-in slide-in-from-top-2">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Submission Failed</p>
            <p className="opacity-80">
              We encountered an error sending your message. Please try again or call us directly at 07xxx xxx xxx.
            </p>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-bold text-brand-navy">
            Full Name
          </label>
          <input
            {...register('name')}
            id="name"
            type="text"
            disabled={mutation.isPending || isThrottled}
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-brand-surface transition-all outline-none focus:ring-2 focus:ring-brand-teal/20",
              errors.name ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-brand-teal"
            )}
            placeholder="John Smith"
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && (
            <p className="text-red-600 text-xs font-medium flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-bold text-brand-navy">
            Email Address
          </label>
          <input
            {...register('email')}
            id="email"
            type="email"
            disabled={mutation.isPending || isThrottled}
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-brand-surface transition-all outline-none focus:ring-2 focus:ring-brand-teal/20",
              errors.email ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-brand-teal"
            )}
            placeholder="john@organisation.co.uk"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p className="text-red-600 text-xs font-medium flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-bold text-brand-navy">
            Phone Number (Optional)
          </label>
          <input
            {...register('phone')}
            id="phone"
            type="tel"
            disabled={mutation.isPending || isThrottled}
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-brand-surface transition-all outline-none focus:ring-2 focus:ring-brand-teal/20",
              errors.phone ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-brand-teal"
            )}
            placeholder="07123 456 789"
          />
          {errors.phone && (
            <p className="text-red-600 text-xs font-medium flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone.message}
            </p>
          )}
        </div>

        {/* Service */}
        <div className="space-y-2">
          <label htmlFor="serviceInterest" className="block text-sm font-bold text-brand-navy">
            Service of Interest
          </label>
          <select
            {...register('serviceInterest')}
            id="serviceInterest"
            disabled={mutation.isPending || isThrottled}
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-brand-surface transition-all outline-none focus:ring-2 focus:ring-brand-teal/20 appearance-none",
              errors.serviceInterest ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-brand-teal"
            )}
          >
            <option value="">Select a service...</option>
            <option value="Regulation 44 Visits">Regulation 44 Visits</option>
            <option value="Consultancy Support">Consultancy Support</option>
            <option value="Mock Inspections">Mock Inspections</option>
            <option value="Compliance Audits">Compliance Audits</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
          {errors.serviceInterest && (
            <p className="text-red-600 text-xs font-medium flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.serviceInterest.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-bold text-brand-navy">
          Your Enquiry
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          disabled={mutation.isPending || isThrottled}
          className={cn(
            "w-full px-4 py-3 rounded-lg border bg-brand-surface transition-all outline-none focus:ring-2 focus:ring-brand-teal/20 resize-none",
            errors.message ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-brand-teal"
          )}
          placeholder="How can our consultancy team support you?"
        />
        <div className="flex justify-between items-center">
          {errors.message ? (
            <p className="text-red-600 text-xs font-medium flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message.message}
            </p>
          ) : (
            <div />
          )}
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
            Max 1,000 characters
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={mutation.isPending || isThrottled}
        className={cn(
          "w-full py-4 rounded-xl font-bold tracking-widest text-sm transition-all flex items-center justify-center gap-2 shadow-lg",
          isThrottled 
            ? "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none" 
            : "bg-brand-navy text-white hover:bg-navy-800 hover:-translate-y-0.5 active:translate-y-0"
        )}
      >
        {mutation.isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            SENDING ENQUIRY...
          </>
        ) : isThrottled ? (
          <>WAIT {throttleRemaining}S</>
        ) : (
          <>
            SEND MESSAGE
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[10px] text-center text-gray-400 leading-relaxed px-4">
        By submitting this form, you agree to our <span className="underline">Privacy Policy</span>. We will only use your data to process your enquiry.
      </p>
    </form>
  )
}
