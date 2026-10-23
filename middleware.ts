import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the login page itself to load without infinite loops
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Protect all other /admin routes
  if (pathname.startsWith('/admin')) {
    const supabaseAuthCookie = request.cookies
      .getAll()
      .find((cookie) => cookie.name.includes('auth-token') || cookie.name.startsWith('sb-'));

    // If not logged in, redirect to the Admin Login page
    if (!supabaseAuthCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
