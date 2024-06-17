"use client"

import { Eye, UserRoundCheck, UserX } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from "@/styles/component/moreOption.module.scss"
import { useRouter } from 'next/navigation'

export default function MoreOptionsComponent({data}:any) {
    const route = useRouter()
    const [open,setOpen] = useState(false)

    const click = (e:any)=>{
        console.log(e)
        setOpen(!open)
    }
    const viewFunction = ()=>{
        // console.log(data.name)
        localStorage.setItem("userDetail",JSON.stringify(data))
        const name = data?.name?.split(" ").join("-")
        route.push(`/users/${name}`)
    }

    return (
        <div onClick={(e=>click(e))}  className={styles.more_container}>
            <span>
                <Image src={"/images/more.png"} alt='logo' width={20} height={20} />
            </span>
            {open && <div className={styles.more_box}>
                <span onClick={viewFunction} className={styles.more_box_flex}>
                    <Eye />
                    <span className={styles.more_text}>View Details</span>
                </span>
                <span className={styles.more_box_flex}>
                    <UserX />
                    <span className={styles.more_text}>Blacklist User</span>
                </span>
                <span className={styles.more_box_flex}>
                    <UserRoundCheck />
                    <span className={styles.more_text}>Activate User</span>
                </span>
            </div>}
        </div>
    )
}
