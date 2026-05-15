/**
 * Shared TypeScript types for CYRUS Residential Care Consultancy.
 * Keep domain types here; component-local types live alongside their component.
 */

// ── Navigation ─────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

// ── Services ───────────────────────────────────────────────────────────────

export type ServiceCategory =
  | 'regulation-44'
  | 'consultancy'
  | 'mock-inspections'
  | 'compliance-audits'

export interface Service {
  id: ServiceCategory
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
}

// ── Contact form ───────────────────────────────────────────────────────────

export interface ContactFormData {
  /** Full name of the enquirer */
  name: string
  /** Business email address */
  email: string
  /** Optional: provider organisation name */
  organisation?: string
  /** Service of interest */
  serviceInterest?: ServiceCategory | ''
  /** Free-text enquiry body */
  message: string
  /** GDPR consent checkbox */
  gdprConsent: boolean
}

// ── Generic utility types ──────────────────────────────────────────────────

export interface ApiError {
  message: string
  code?: string
}

export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error'
