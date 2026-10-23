import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Protect all /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check for Supabase authentication cookie token
    const supabaseAuthCookie = request.cookies
      .getAll()
      .find((cookie) => cookie.name.includes('auth-token') || cookie.name.startsWith('sb-'));

    // If no auth cookie is present, redirect visitor to homepage
    if (!supabaseAuthCookie) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
