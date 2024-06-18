import React from 'react'
import styles from "@/styles/layout/navbar.module.scss"
import Image from 'next/image'
import { Bell, Search } from 'lucide-react'


export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.first_container}>
                <Image alt={"logo"} src={`/images/lendsqr.png`} width={145} height={30} />
                <div className={styles.input_container}>
                    <div>
                        <input type="text" placeholder='Search for anything' />
                    </div>
                    <span><Search /></span>
                </div>
            </div>
            <div className={styles.second_container}>
                <p>Docs</p>
                <Bell />
                <div>
                    <Image alt={"avatar"} src={`/images/profile.png`} width={48} height={48} />
                    <span>Adedeji</span>
                    <Image alt={"avatar"} src={`/images/dropdown.png`} width={20} height={20} />

                </div>
            </div>
        </div>
    )
}
