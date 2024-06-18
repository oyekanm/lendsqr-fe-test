"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import SideNav from "../_components/layout/sideNav";
import Navbar from "../_components/layout/navbar";
import styles from "@/styles/layout/layout.module.scss"
import { Menu } from "lucide-react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [active, setActive]= useState(false)
  return (
    <html lang="en" className={styles.html}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className={`${styles.container} ${active && styles.active_side}`}>
          <SideNav active={active} />
          <section className={styles.child_container}>
            <div onClick={()=>setActive(!active)} className={styles.icon}><Menu height={30} width={30} /></div>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
