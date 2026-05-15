/**
 * Utility helpers
 * Pure functions – no side effects, no external imports.
 */

/**
 * Merge class names safely (lightweight `clsx` substitute).
 * Filters out falsy values so conditional classes work cleanly.
 *
 * @example
 * cn('px-4', isActive && 'bg-brand-navy', undefined)
 * // → 'px-4 bg-brand-navy'
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Client-side rate limiter (token bucket).
 * Use on the contact form to prevent API exhaustion (design.md §4).
 *
 * @param key      Unique identifier for this rate-limit bucket
 * @param limit    Maximum number of calls per `windowMs`
 * @param windowMs Duration of the window in milliseconds
 * @returns        `true` if the call is allowed, `false` if throttled
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
): boolean {
  const storageKey = `rl_${key}`
  const now = Date.now()

  try {
    const raw = sessionStorage.getItem(storageKey)
    const record: { timestamps: number[] } = raw
      ? (JSON.parse(raw) as { timestamps: number[] })
      : { timestamps: [] }

    // Remove timestamps outside the current window
    record.timestamps = record.timestamps.filter((t) => now - t < windowMs)

    if (record.timestamps.length >= limit) return false

    record.timestamps.push(now)
    sessionStorage.setItem(storageKey, JSON.stringify(record))
    return true
  } catch {
    // If sessionStorage is unavailable, fail open (don't block UX)
    return true
  }
}

/**
 * Format a date as a human-readable string using the user's locale.
 */
export function formatDate(
  date: Date | string,
  options?: Intl.DateTimeFormatOptions,
): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...options,
  })
}
