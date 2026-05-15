import { QueryClient } from '@tanstack/react-query'

/**
 * Shared QueryClient instance.
 * – staleTime: 4 min  → matches auth session cache TTL (design.md §4)
 * – gcTime:    10 min → keep cached data in memory between navigations
 * – retry:     1      → fail fast; don't hammer the network on error
 * – refetchOnWindowFocus: false → prevent chatty background fetches
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 4 * 60 * 1000,   // 4 minutes
      gcTime:    10 * 60 * 1000,  // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
})
