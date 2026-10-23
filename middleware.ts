import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the login page itself to load without infinite loops
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Protect all other /admin routes
  if (pathname.startsWith('/admin')) {
    // Check for Supabase session cookies
    const allCookies = request.cookies.getAll();
    const hasAuthCookie = allCookies.some(
      (cookie) =>
        cookie.name.includes('auth-token') ||
        cookie.name.startsWith('sb-') ||
        cookie.name.includes('supabase')
    );

    // If no cookie is present, redirect to admin login
    if (!hasAuthCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
