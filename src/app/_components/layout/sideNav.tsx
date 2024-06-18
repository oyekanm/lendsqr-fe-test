"use client"

import React from 'react'
import { SideNavData } from '../sideNavData'
import Link from 'next/link'
import Image from 'next/image'
import styles from "@/styles/layout/sideNav.module.scss"
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function SideNav({ active, setActive }: any) {
  const route = usePathname()
  // console.log(route)
  return (
    <div className={`${styles.container} ${active && styles.sidebar_active}`}>
      <div className={styles.flex_container}>
        <Image alt={"switch organization"} src={`/images/icons/switch.png`} width={16} height={12} />
        <p>Switch Organization</p>
        <ChevronDown />
      </div>
      <div >
        <Link
          onClick={() => setActive(!active)}
          href={"/"} className={`${styles.flex_container} ${"/" === route && styles.link_active}`}>
          <Image alt={"dashboard"} src={`/images/icons/home.png`} width={16} height={12} />
          <p style={{ opacity: .4 }}>Dashboard</p>
        </Link>
      </div>
      <nav>
        <ul>
          {
            SideNavData.map(nav => {
              return (
                <div key={nav.header}>
                  <p className={styles.header}>{nav.header}</p>
                  <div className={styles.sub_container}>
                    {
                      nav.sub.map(sub => {
                        return (
                          <Link
                            href={`${sub.text === "Users" ? "/" + sub.text.toLowerCase() : ""}`}
                            onClick={() => setActive(!active)}
                            className={`${styles.link_container} ${"/" + sub.text.toLowerCase() === route && styles.link_active}`} key={sub.text}>
                            <Image alt={sub.text} src={`/images/icons/${sub.text.toLowerCase()}.png`} width={16} height={12} />
                            <li>
                              {sub.text}
                            </li>
                          </Link>)
                      })
                    }
                  </div>
                </div>)
            })
          }
        </ul>
      </nav>
    </div>
  )
}
