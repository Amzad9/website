import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Regex for static assets
const STATIC_ASSETS = /\.(?:jpg|jpeg|gif|png|svg|ico|webp|woff|woff2|ttf|eot|css|js)$/

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Cache static assets for 1 year
  if (STATIC_ASSETS.test(request.nextUrl.pathname)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    return response
  }

  // For HTML pages
  if (request.nextUrl.pathname.startsWith('/')) {
    // SSR pages: Use stale-while-revalidate strategy
    // max-age=1: Cache is valid for 1 second
    // stale-while-revalidate=59: Stale cache can be used for 59 seconds while revalidating
    response.headers.set(
      'Cache-Control',
      'public, max-age=1, stale-while-revalidate=59'
    )

    // Add security headers
    response.headers.set('X-DNS-Prefetch-Control', 'on')
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
    response.headers.set('X-Frame-Options', 'SAMEORIGIN')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  }

  return response
}

// Configure which paths middleware will run on
export const config = {
  matcher: [
    // Match all paths except:
    // 1. /api (API routes)
    // 2. /_next (Next.js internals)
    // 3. /_static (inside /public)
    // 4. /_vercel (Vercel internals)
    // 5. Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt)
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
} 