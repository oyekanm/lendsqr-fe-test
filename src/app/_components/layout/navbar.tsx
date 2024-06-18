import React, { useRef, useState } from 'react'
import styles from "@/styles/layout/navbar.module.scss"
import Image from 'next/image'
import { Bell, Menu, Search } from 'lucide-react'


export default function Navbar() {
    const [active, setActive] = useState(false)
    const ref:any = useRef(0)
// const {offsetHeight}= ref!?.current!
const height =  ref!?.current !== null ? ref?.current.offsetHeight : 0
    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.small_screen}>
                <Image alt={"logo"} src={`/images/lendsqr.png`} width={145} height={30} />
                <span>
                    <Search />
                    <Menu onClick={() => setActive(!active)} height={30} width={30} />
                </span>
            </div>
            <div className={`${styles.first_container} ${styles.none}`}>
                <Image alt={"logo"} src={`/images/lendsqr.png`} width={145} height={30} />
                <div className={styles.input_container}>
                    <div>
                        <input type="text" placeholder='Search for anything' />
                    </div>
                    <span><Search /></span>
                </div>
            </div>
            <div className={`${styles.second_container} ${styles.none}`}>
                <p>Docs</p>
                <Bell />
                <div>
                    <Image alt={"avatar"} src={`/images/profile.png`} width={48} height={48} />
                    <span>Adedeji</span>
                    <Image alt={"avatar"} src={`/images/dropdown.png`} width={20} height={20} />

                </div>
            </div>
            {active && <div style={{top:height}} className={`${styles.active_container} ${active && styles.nav_active}`} >
                    <p>Docs</p>
                    <Bell />
                    <div>
                        <Image alt={"avatar"} src={`/images/profile.png`} width={48} height={48} />
                        <span>Adedeji</span>
                        <Image alt={"avatar"} src={`/images/dropdown.png`} width={20} height={20} />

                    </div>
            </div>}
        </div>
    )
}
