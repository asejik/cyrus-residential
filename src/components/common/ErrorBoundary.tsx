/**
 * Global React Error Boundary
 * Catches any render-time error in the component tree and displays
 * a graceful fallback UI rather than a blank white screen.
 *
 * design.md §7 – "Global React Error Boundary to catch render failures"
 */

import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // In production, wire this up to an error monitoring service (e.g. Sentry)
    console.error('[ErrorBoundary] Uncaught render error:', error, info)
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div
          role="alert"
          aria-live="assertive"
          className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA] px-6 text-center"
        >
          <div className="max-w-md">
            {/* Logo / brand mark */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-[#0B1B3D] flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M16 4L28 12V20L16 28L4 20V12L16 4Z"
                    stroke="#4A90E2"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M16 10L22 14V18L16 22L10 18V14L16 10Z"
                    fill="#4A90E2"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </div>

            <h1
              className="text-2xl font-bold text-[#0B1B3D] mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-2 text-sm leading-relaxed">
              An unexpected error occurred. Our team has been notified.
              Please try refreshing the page.
            </p>
            {import.meta.env.DEV && this.state.error && (
              <pre className="mt-4 text-left bg-red-50 border border-red-200 rounded-lg p-4 text-xs text-red-700 overflow-x-auto">
                {this.state.error.message}
              </pre>
            )}
            <div className="mt-6 flex gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-3 rounded-lg bg-[#4A90E2] text-white font-semibold text-sm hover:bg-[#2A72C8] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A90E2]"
              >
                Try again
              </button>
              <a
                href="/"
                className="px-6 py-3 rounded-lg border border-[#0B1B3D] text-[#0B1B3D] font-semibold text-sm hover:bg-[#0B1B3D] hover:text-white transition-colors duration-200"
              >
                Go home
              </a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
