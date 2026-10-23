import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public access to the admin login page
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Protect all /admin routes
  if (pathname.startsWith('/admin')) {
    const allCookies = request.cookies.getAll();
    
    // Check if the authenticated session cookie exists
    const hasAuthCookie = allCookies.some(
      (cookie) =>
        cookie.name.includes('auth-token') ||
        cookie.name.startsWith('sb-') ||
        cookie.name.includes('supabase')
    );

    // If not authenticated, redirect instantly to the login page
    if (!hasAuthCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
