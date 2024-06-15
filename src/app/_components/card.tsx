import React from 'react'
import styles from "@/styles/component/card.module.scss"
import Image from 'next/image';

interface cards {
    img: string;
    number: number;
    text: string;
}

type Props = {
    cardProp: cards
}

export default function Card({ cardProp }: Props) {
    return (
        <div className={styles.card}>
            <Image src={cardProp.img} alt='logo' width={175} height={36} />
            <p className={styles.text}>{cardProp.text}</p>
            <p className={styles.number}>{cardProp.number}</p>
        </div>
    )
}
