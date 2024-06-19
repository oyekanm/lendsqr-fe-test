import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./lib/getUser";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // This Defines paths that do not require authentication (e.g., login, signup)
  const publicPaths = ["/login"];

  // This Check if the current path requires authentication
  const isPublicPath = publicPaths.includes(url.pathname);

  // If it's a public path, continue as usual
  if (isPublicPath) {
    return NextResponse.next();
  }

  // This Check for authentication status (replace with your logic)
  const cookie = request.cookies
  const user = cookie.get("token")

  const isAuthenticated = user;
  // console.log(user, "what")

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return NextResponse.redirect(
      new URL(`/login?fallback=${url.pathname}`, request.url)
    );
  }

  // If authenticated, continue processing the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/users/:path*"],
};

//   export async function verifySession(request:NextRequest) {
//     const sessionToken = request.cookies.get('auth_token');
//     if (sessionToken && sessionToken === 'valid_token') {
//       return true;
//     }
//     return false;
//   }
