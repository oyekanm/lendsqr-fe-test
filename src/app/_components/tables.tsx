"use client"

import styles from '@/styles/component/Table.module.scss';
import Image from 'next/image';
import MoreOptionsComponent from './moreOptionsComponent';
import { useState } from 'react';

type Props = {
    data: data[];
    headers: string[]
}

interface data {
    name: string,
    email: string,
    phone: string,
    date: string,
    organization: string,
    status: string
    id:string,
    gender:string
}

function Table({ data, headers }: Props) {
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(10)
    return (
        <div className={styles.container}>
            <table className={`${styles.table}`}>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header}>
                                {header}
                                <span>
                                    <Image src={"/images/filterbtn.png"} alt='logo' width={16} height={16} />
                                </span>
                            </th>

                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(startIndex,endIndex).map((row) => {
                        const state = row.status
                        return (
                            <tr className={`${styles.tr}`} key={row.id}>
                                <td key={row.name}>{row.organization}</td>
                                <td key={row.name}>{row.name}</td>
                                <td key={row.name}>{row.email}</td>
                                <td key={row.name}>{row.phone}</td>
                                <td key={row.name}>{row.date}</td>
                                <td key={row.name} >
                                    <span className={`${styles.status} ${styles[state]}`}>{row.status}</span>
                                </td>
                                <td key={row.name} >
                                    <MoreOptionsComponent data={row} />
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
