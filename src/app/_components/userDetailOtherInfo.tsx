import React from 'react'
import styles from "@/styles/component/userDetailOtherInfo.module.scss"
import { OtherDetailData } from './otherDetailData'


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

const noTT = ["twitter", "instagram", "email address", "office email"]

export default function UserDetailOtherInfo({ data }: Props) {
    const newArray = OtherDetailData(data)
    return (
        <div className={styles.other_card_container}>
            {
                newArray.map(info => {
                    const grid = `grid${[info?.grid]}`
                    // console.log(styles[grid])
                    return <div className={styles.other_container}>
                        <p className={styles.other_title}>{info.header}</p>
                        <div className={`${styles.other_info_container} ${styles[grid]}`}>
                            {
                                info.sub.map((sub, i) => {
                                    const tt: any = noTT.includes(sub.title) && "lowercase"
                                    return <div key={i} className={styles.other_texttitle_container}>
                                        <p className={styles.other_text_header}>{sub.title}</p>
                                        <p className={styles.other_text} style={{ textTransform: tt }}>{sub.text}</p>
                                    </div>
                                })
                            }
                        </div>
                        <span className={styles.other_container_span}></span>
                    </div>
                })
            }
        </div>
    )
}
