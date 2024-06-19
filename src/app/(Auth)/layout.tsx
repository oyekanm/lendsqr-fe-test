"use client"

import "@/app/globals.css";
import styles from "@/styles/layout/layout.module.scss"
import { Suspense } from "react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={styles.html}>
      <body>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
