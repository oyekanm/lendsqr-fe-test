"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import SideNav from "../_components/layout/sideNav";
import Navbar from "../_components/layout/navbar";
import styles from "@/styles/layout/layout.module.scss"
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getUser } from "@/lib/getUser";
// import { middleware } from "@/lib/middleware";

const inter = Inter({ subsets: ["latin"] });


function Middleware(url: string) {
  const route = useRouter()

  // This checks for authentication status
  const user = getUser()
  const isAuthenticated = user.name?true:false
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    route.push(`/login?fallback=${url}`)
  }

  // If authenticated, continue processing the request
  // return;
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [active, setActive] = useState(false)
  const path = usePathname()
  const user = getUser()

  if (!user.name) {
    Middleware(path)
  }
  // console.log(user,  path)

  return (
    <html lang="en" className={styles.html}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className={`${styles.container} ${active && styles.active_side}`}>
          <SideNav setActive={setActive} active={active} />
          <section className={styles.child_container}>
            <div onClick={() => setActive(!active)} className={styles.icon}>
             {active?<ChevronDown height={30} width={30} />: <ChevronRight height={30} width={30} />}
              menu
            </div>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
