/**
 * TanStack Query provider
 * Global QueryClient is configured here with sensible egress-optimised
 * defaults per design.md §3 (caching mandatory, deduplicate requests).
 */

import { QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, type ReactElement } from 'react'
import { queryClient } from '@/lib/queryClient'

interface QueryProviderProps {
  children: ReactNode
}

export function QueryProvider({ children }: QueryProviderProps): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
