/**
 * Custom hook: usePageMeta
 * Sets the <title> and meta description for the current page.
 * Supports WCAG & SEO requirements (design.md §5 – Lighthouse 95+).
 */

import { useEffect } from 'react'

const SITE_NAME = 'Cyrus Residential Care Consultancy'

interface PageMetaOptions {
  /** Page-specific title. Will be appended with " | Cyrus RCC" */
  title: string
  /** Short page description for search engines (max 160 chars recommended) */
  description: string
}

export function usePageMeta({ title, description }: PageMetaOptions): void {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`

    let metaDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )

    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }

    metaDesc.content = description

    // Cleanup: restore a generic title on unmount to prevent stale titles
    return () => {
      document.title = SITE_NAME
    }
  }, [title, description])
}
