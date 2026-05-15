/**
 * App.tsx – Application root
 *
 * Responsibilities:
 *  1. Mount global providers (TanStack Query)
 *  2. Wrap entire tree in the React Error Boundary (design.md §7)
 *  3. Configure React Router with lazy-loaded routes (design.md §5)
 *  4. Apply React Suspense for code-splitting (design.md §5)
 *
 * NO business logic or UI content belongs here.
 */

import { lazy, Suspense, type ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { QueryProvider } from '@/providers/QueryProvider'
import { Layout } from '@/components/layout/Layout'

// ── Lazy-loaded page routes ─────────────────────────────────────────────────
// Each import() boundary creates a separate JS chunk for code splitting.
const HomePage     = lazy(() => import('@/pages/HomePage'))
const AboutPage    = lazy(() => import('@/pages/AboutPage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const WhyUsPage    = lazy(() => import('@/pages/WhyUsPage'))
const ContactPage  = lazy(() => import('@/pages/ContactPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

// ── Route-level Suspense fallback ───────────────────────────────────────────
// Replaced with a skeleton/spinner per component in Phase 2.
const PageLoader = (): ReactElement => (
  <div
    role="status"
    aria-label="Loading page"
    className="min-h-screen flex items-center justify-center bg-[#F8F9FA]"
  >
    <div className="flex flex-col items-center gap-4">
      {/* Animated brand mark */}
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-[#0B1B3D]/10 border-t-[#4A90E2] animate-spin" />
      </div>
      <span className="text-sm text-[#0B1B3D]/50 font-medium tracking-wide uppercase">
        Loading…
      </span>
    </div>
  </div>
)

// ── Application root ─────────────────────────────────────────────────────────
function App(): ReactElement {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/"          element={<HomePage />} />
                <Route path="/about"     element={<AboutPage />} />
                <Route path="/services"  element={<ServicesPage />} />
                <Route path="/why-us"    element={<WhyUsPage />} />
                <Route path="/contact"   element={<ContactPage />} />
                {/* Catch-all → custom 404 (design.md §7) */}
                <Route path="*"          element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryProvider>
    </ErrorBoundary>
  )
}

export default App
