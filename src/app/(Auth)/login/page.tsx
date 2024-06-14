import Image from 'next/image'
import React from 'react'

import styles from "@/styles/pages/login.module.scss"

export default function Login() {
  return (
    <div className={styles.login}>
      <section className={styles.first_container_grid}>
        <div className={styles.company_good}>
          <Image src={"/images/lendsqr.png"} alt='logo' width={175} height={36} />
        </div>
        <div className={styles.image_container}>
          <Image src={"/images/pablo-sign-in 1.png"} alt='logo' width={600} height={350} />
        </div>
      </section>
      <section></section>
    </div>
  )
}
