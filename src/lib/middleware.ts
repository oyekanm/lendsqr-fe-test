"use client"

import { usePathname, useRouter } from "next/navigation";

 export function middleware(url:string) {

    const path = usePathname()
    const route = useRouter()

    console.log("here")
  
    // paths that do not require authentication 
    const publicPaths = ['/login'];
  
    //This checks if the current path requires authentication
    const isPublicPath = publicPaths.includes(url);
  
    // If it's a public path, continue as usual
    if (isPublicPath) {
      return;
    }
  
    // Check for authentication status (replace with your logic)
    const isAuthenticated = true; // Replace with your authentication logic
  
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
     return  route.push(`/login?fallback=${url}`)
    }
  
    // If authenticated, continue processing the request
    return;
  }