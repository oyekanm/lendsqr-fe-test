import { NextRequest, NextResponse } from "next/server";


 export async function middleware(request:NextRequest) {
    const url = request.nextUrl;

  
    // Define paths that do not require authentication (e.g., login, signup)
    const publicPaths = ['/login'];
  
    // Check if the current path requires authentication
    const isPublicPath = publicPaths.includes(url.pathname);
  
    // If it's a public path, continue as usual
    if (isPublicPath) {
      return NextResponse.next();
    }
  
    // Check for authentication status (replace with your logic)
    const isAuthenticated = false; // Replace with your authentication logic
  
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL(`/login?fallback=${url.pathname}`, request.url));
    }
  
    // If authenticated, continue processing the request
    return NextResponse.next();
  }
  
  
  

  export const config = {
    matcher:  ['/:path*'],
  }

//   export async function verifySession(request:NextRequest) {
//     const sessionToken = request.cookies.get('auth_token');
//     if (sessionToken && sessionToken === 'valid_token') { 
//       return true;
//     }
//     return false;
//   }
  