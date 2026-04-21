import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/*
 * Middleware stub.
 * Add authentication session checks and rate limiting here in future phases.
 * Do not add business logic to this file.
 */
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
