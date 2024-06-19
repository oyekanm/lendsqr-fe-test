import Image from 'next/image'
import React from 'react'
import styles from "@/styles/component/userDetailHeaderCard.module.scss"

const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System"
]

type Props = {
    data: data
}

interface data {
    name: string,
    email: string,
    phone: string,
    date: string,
    organization: string,
    status: string
    id: string,
    gender: string
}

export default function UserDetailHeaderCard({data}:Props) {
    return (
        <div className={styles.userHeader_container}>
            <div className={styles.detail_main_container}>
                <Image src={"/images/avatar.png"} priority alt='logo' width={100} height={100} />
                <div className={styles.detail_info_container}>
                    <p className={styles.detail_name}>{data.name}</p>
                    <p className={styles.detail_id}>{data.id}</p>
                </div>
                <span className={styles.detail_info_line}></span>
                <div className={styles.detail_info_container}>
                    <p className={styles.detail_tier}>User’s Tier</p>
                    <span className={styles.detail_flex}>
                        <Image src={"/images/full star.png"} alt='logo' width={16} height={16} />
                        <Image src={"/images/empty star.png"} alt='logo' width={16} height={16} />
                        <Image src={"/images/empty star.png"} alt='logo' width={16} height={16} />
                    </span>
                </div>
                <span className={styles.detail_info_line}></span>
                <div className={styles.detail_info_container}>
                    <p className={styles.detail_name}>₦200,000.00</p>
                    <p className={styles.detail_id}>9912345678/Providus Bank</p>
                </div>
            </div>
            <div className={styles.tab_container}>
                {
                    tabs.map(tab => {
                        return <p key={tab} className={`${styles.detail_tab} ${tab === "General Details" && styles.detail_tab_active}`}>{tab}</p>
                    })
                }
            </div>
        </div>
    )
}
