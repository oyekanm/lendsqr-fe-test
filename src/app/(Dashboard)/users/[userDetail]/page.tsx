'use client'

import UserDetailHeaderCard from '@/app/_components/userDetailHeaderCard'
import UserDetailOtherInfo from '@/app/_components/userDetailOtherInfo'
import styles from "@/styles/pages/userDetail.module.scss"
import typo from "@/styles/helpers/_typography.module.scss"
import React from 'react'
import Link from 'next/link'
import { MoveLeft } from 'lucide-react'

type Props = {
  params: { userDetail: string }
}

export default function UserDetail({ params }: Props) {
  const { userDetail } = params
  const name = userDetail?.split("-").join(" ")
  const storedUserData = JSON.parse(localStorage.getItem('userDetail')!)
  const userData = storedUserData?.name === name ? storedUserData : null

  // console.log(name, storedUserData, userData)
  return (
    <div className={styles.other_container}>
      <Link href={"/users"} className={styles.back_btn}>
        <MoveLeft />
        <span>Back to Users</span>
      </Link>
      <div className={styles.header_flex}>
        <p className={typo.header_text}>user details</p>
        <div>
          <button className={`${styles.btn} ${styles.blacklist}`}>Blacklist User</button>
          <button className={`${styles.btn} ${styles.activate}`}>Activate User</button>
        </div>
      </div>
      <section>
        <UserDetailHeaderCard />
      </section>
      <section>
        <UserDetailOtherInfo data={userData} />
      </section>
    </div>
  )
}
