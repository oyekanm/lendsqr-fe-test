'use client'

import "@/app/globals.css";
import styles from "@/styles/layout/layout.module.scss";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import Navbar from "../_components/layout/navbar";
import SideNav from "../_components/layout/sideNav";
// import { middleware } from "@/lib/middleware";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [active, setActive] = useState(false)

  return (
    <html lang="en" className={styles.html}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main className={`${styles.container} ${active && styles.active_side}`}>
          <SideNav setActive={setActive} active={active} />
          <section className={styles.child_container}>
            <div onClick={() => setActive(!active)} className={styles.icon}>
              {active ? <ChevronDown height={30} width={30} /> : <ChevronRight height={30} width={30} />}
              menu
            </div>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
