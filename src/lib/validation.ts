import { z } from 'zod'

/**
 * Contact Form Validation Schema
 * Requirement: design.md §4 & Phase 4 Instructions
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  
  email: z
    .string()
    .email('Please enter a valid business email address')
    .max(254),
  
  phone: z
    .string()
    .regex(/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^$/, 'Please enter a valid UK mobile number (optional)')
    .optional()
    .or(z.literal('')),
  
  serviceInterest: z.enum([
    'Regulation 44 Visits',
    'Consultancy Support',
    'Mock Inspections',
    'Compliance Audits',
    'General Enquiry'
  ], {
    message: 'Please select a service of interest'
  }),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message cannot exceed 1000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
