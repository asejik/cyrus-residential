/**
 * NotFoundPage – 404
 * Custom "page not found" component per design.md §7.
 */

import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = (): ReactElement => (
  <main
    role="main"
    aria-label="Page not found"
    className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA] px-6 text-center"
  >
    <span
      className="text-[8rem] font-extrabold text-[#0B1B3D] leading-none select-none opacity-10"
      aria-hidden="true"
    >
      404
    </span>
    <h1
      className="mt-4 text-3xl font-bold text-[#0B1B3D]"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      Page Not Found
    </h1>
    <p className="mt-3 text-gray-500 max-w-sm">
      The page you&apos;re looking for doesn&apos;t exist or may have been moved.
    </p>
    <Link
      to="/"
      className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4A90E2] text-white font-semibold text-sm hover:bg-[#2A72C8] transition-colors duration-200"
    >
      ← Back to Home
    </Link>
  </main>
)

export default NotFoundPage
